//model Match
const Matches = require('../config/models/matches');

let functionServices = {
    
    async findLatestMatches(limit) {

    const matches = await Matches.find().sort({_id: -1}).limit(limit);

    return matches;
    },

    dateFormatTransformation(date){

        return new Date(new Intl.DateTimeFormat('en-US',{timeZone: "Asia/Kolkata"}).format(date));

    },

    async searchMatchRangeDates(startDate,endDate){

        let startDateFormat = new Date(startDate);
        let endDateFormat = new Date(endDate);

        startDate = this.dateFormatTransformation(startDateFormat);
        endDate = this.dateFormatTransformation(endDateFormat);

        return await Matches.find({"kickoff.label": {$gte: startDate , $lte: endDate}}).sort({_id: -1});
    },

    matchStatistics(arrayMatches){

        let arrayStatistics = [];

        const tournament = ["EN_PR","EU_UC","EN_FA","EN_LC","IG_OF"];
        
        for (let i = 0; i < tournament.length ; i++) {
            
            let statistics = {};
            let won = 0;
            let drawn = 0;
            let lost = 0;
            let goalsFor = 0;
            let goalsAgainst = 0;
            let points = 0;
            let groupPhase = true;

            let matches = arrayMatches.filter(match=> {
                return match.gameweek.compSeason.competition.abbreviation === tournament[i]
            });
            if (matches.length === 0) {
                continue;
            }
            statistics.played = matches.length;
            
            for (let j = 0 ; j < matches.length; j++) {
                
                statistics.competition = matches[j].gameweek.compSeason.competition.description;
                
                if (matches[j].teams[0].team.id === 26) {
                    goalsFor += matches[j].teams[0].score;
                    goalsAgainst += matches[j].teams[1].score;

                    if (matches[j].teams[0].score > matches[j].teams[1].score) {
                        won += 1;
                    }
                    if (matches[j].teams[0].score < matches[j].teams[1].score) {
                        lost += 1;
                    }

                } else{
                    goalsFor += matches[j].teams[1].score;
                    goalsAgainst += matches[j].teams[0].score;

                    if (matches[j].teams[0].score > matches[j].teams[1].score) {
                        lost += 1;
                    }
                    if (matches[j].teams[0].score < matches[j].teams[1].score) {
                        won += 1;
                    }
                }
                //drawn
                if (matches[j].teams[0].score === matches[j].teams[1].score) {
                    drawn += 1;
                }
                if (typeof matches[j].group === "undefined" ) {
                    groupPhase = false;
                }
            }
            //points
            if (tournament[i] === "EN_PR" || (tournament[i] === "EU_UC" && groupPhase)) {
                points = 3*won + drawn;

            }else{
                points = "--";

            }

            statistics.goalsFor = goalsFor;
            statistics.goalsAgainst = goalsAgainst
            statistics.goalDifference = goalsFor - goalsAgainst;

            statistics.won = won;
            statistics.lost = lost;
            statistics.drawn = drawn;

            statistics.points = points;
            
            arrayStatistics.push(statistics);
        }
    
        return arrayStatistics;
    },

    async searchMatchForId(id) {

        const matchId = await Matches.find({id: id});

        return matchId;
    },

    async searchMatchForDate(date) {

        const matchDate = await Matches.find({"kickoff.label": {$eq: date}});

        //Other sintaxis.
        // const matchForDate = await Matches.find().where("kickoff.label").eq(dateFormat);

        return matchDate;
    }


};

module.exports = functionServices;