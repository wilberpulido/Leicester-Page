const express = require('express');
const router = express();
const cors = require('cors');

let functionServices = require("../services/functionServices");
require('../config/db/db')();

router.use(cors());

router.get('/',async(req,res)=>{

    res.send("todo bien!")
})

router.get('/lastGame',async(req,res)=>{

    const lastGame = await functionServices.findLatestMatches(1);

    if (lastGame.length) {
        return  res.json({res:lastGame});
    }
    if (lastGame.length === 0) {
        return  res.status(404).json({res:[]});
    }


})
router.get('/lastFiftyGame',async(req,res)=>{

    const lastFiftyGames = await functionServices.findLatestMatches(50);

    if (lastFiftyGames.length) {
        return  res.json({res:lastFiftyGames});
    }
    if (lastFiftyGames.length === 0) {
        return  res.status(404).json({res:[]});
    }

})

router.get('/searchMatchForIdDate/:id?/:date?',async(req,res)=>{

    const id = req.query.id;
    let date = "";

    if (req.query.date) {
        date = new Date(req.query.date);
        date = await functionServices.dateFormatTransformation(date);
    }

    const matchForId = await functionServices.searchMatchForId(id);
    const matchForDate = await functionServices.searchMatchForDate(date);

    let response = [];

    if (matchForDate.length && matchForId.length) {
        return res.json({res: [matchForDate[0] , matchForId[0]]})

    }
    if (matchForDate.length) {
        return res.json({res: [matchForDate[0]] })

    }
    if (matchForId.length) {
        return res.json({res: [matchForId[0]] })

    }
    if (!matchForDate.length && !matchForId.length) {
        return res.status(404).send({res: []})
    }

    res.json({res: response});
});

router.get('/searchMatchRangeDates/:startDate?/:endDate?',async(req,res)=>{

    const matches = await functionServices.searchMatchRangeDates(req.query.startDate , req.query.endDate);

    res.json({res: matches});
});

router.get('/searchStandingsRangeDates/:startDate?/:endDate?',async(req,res)=>{

    const matches = await functionServices.searchMatchRangeDates(req.query.startDate , req.query.endDate);


    let statisticsRangeDates = functionServices.matchStatistics(matches);

    // "EN_PR", "Premier League" Liga Premier de Inglaterra por puntos
    // "EU_UC" "UEFA Europa League"	UEFA Europa League fase de grupos y luego eliminacion, si pasa. group directo 
    // "EN_FA" FA Cup  Football Association Challenge Cup por eliminacion directa
    // "EN_LC" EFL Cup Copa de la Liga Por eliminacion directa
    // "IG_OF" "Other Club Friendlies" amistosos

    if (statisticsRangeDates.length === 0) {
        return res.status(404).send({res: []})
    }
    return res.json({res: statisticsRangeDates});
});


module.exports = router;