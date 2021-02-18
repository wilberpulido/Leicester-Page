const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchesSchema = new Schema({
    gameweek: {
        compSeason: {
            competition:{
                abbreviation: String,
                description: String,
                level: String,
                source: String,
                id: Number,
                altIds: {
                    opta: String
                }
            },
            label: String,
            id: Number,
        },
        id:Number,
        gameweek: Number,
        competitionPhase: {
            id: Number,
            groups: [String],
            gameweekRange: [Number],
            type:{type: String},
        }
    },
    id: Number,
    kickoff:{
        completeness: Number,
        millis: Number,
        label: Date,
        gmtOffset: {type: Number},
    },
    teams:[
        {
            team: {
                name: String,
                club: {
                    name: String,
                    shortName:String,
                    abbr: String,
                    id: Number,
                },
                teamType: String,
                shortName: String,
                id: Number,
                altIds: {opta:String}
            },
            score: Number,
        }
    ],
    replay: Boolean,
    ground:{
        name: String,
        city: String,
        source: String,
        id: Number,
    },
    neutralGround: Boolean,
    status: String,
    phase: String,
    outcome: String,
    clock:{
        secs: Number,
        label: String,
    },
    group:String,
    fixtureType: String,
    extraTime: Boolean,
    shootout: Boolean,
    goals: [
        {
            personId: {type: Number},
            assistId: {type: Number},
            clock: {secs: Number, label: String},
            phase: {type: String},
            description: {type: String},
            type:{type: String},
        }
    ],
    behindClosedDoors:{type:Boolean},
    altIds: {
        opta:{
            type:String
        }
    }
},
{
    strictQuery: true
})

module.exports = mongoose.model('matches',MatchesSchema);