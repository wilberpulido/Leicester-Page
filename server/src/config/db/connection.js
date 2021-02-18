const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/foxes',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log('db conectada'))
    .catch(err => console.log(err))
