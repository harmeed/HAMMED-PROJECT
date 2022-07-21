const mongoose = require('mongoose');


const hammed = new mongoose.Schema({
    name: String,
    title: String,
    age: Number,
    email: String,
    isMarried: Boolean,
    occupation: String,
});

const newhammed= mongoose.model('newhammed', hammed);



module.exports = newhammed;
