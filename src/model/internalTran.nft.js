const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tansSchema = new Schema({
    result:[{
        blockNumber:{
            type:String
        },
        timeStamp:{
            type:String
        },
        hash:{
            type:String
        },
        from:{
            type:String
        },
        to:{
            type:String
        },
        value:{
            type:String
        },
        contractAddress:{
            type:String
        },
        input:{
            type:String
        },
        type:{
            type:String
        },
        gas:{
            type:String
        },
        gasUsed:{
            type:String
        },
        traceId:{
            type:String
        },
        isError:{
            type:String
        },
        errCode:{
            type:String
        }    
    }]
}, { versionKey: false })

module.exports = mongoose.model("internalTran", tansSchema);
