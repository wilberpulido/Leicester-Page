const cron = require('node-cron');
const axios = require('axios');

const Matches = require('../models/matches');

async function fillDb(){

    const page = await axios.get(`https://footballapi-lcfc.pulselive.com/football/fixtures?teams=26&compSeasons=&homeTeams=&page=0&pageSize=100&sort=desc&statuses=C&altIds=true&provisional=false`)
        .catch(err=> console.log(err))

    const numPages = page.data.pageInfo.numPages;

    for (let i = numPages; i > -1 ; i--) {
        
        const resultRequest = await axios.get(`https://footballapi-lcfc.pulselive.com/football/fixtures?teams=26&compSeasons=&homeTeams=&page=${i}&pageSize=100&sort=desc&statuses=C&altIds=true&provisional=false`)
        .catch(err=> console.log(err))
        
        for (let j = 99; j > -1; j--) {
            let validate = true;
            
            let match =  resultRequest.data.content[j];
            
            if(typeof match === 'undefined'){
                validate = false;
            }

            if (validate) {
                
                const date = new Date(match.kickoff.label.split(",")[0]);
                
                match.kickoff.label = date;

                const matchModel = new Matches(match);
                Matches.find({id:matchModel.id},async(err,docs)=>{
                    if(docs.length === 0 ){
                        await matchModel.save();
                    }
                })
            }
        }
    }

}

function db(){

    fillDb();

    cron.schedule('0 0 * * *',async()=>{
        await fillDb();
    })
}
        
module.exports = db;