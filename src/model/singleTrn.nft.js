const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tansSchema = new Schema({
    result:{
        type:String,
        // required:true
    }
}, { versionKey: false })

module.exports = mongoose.model("singelTrn", tansSchema);
