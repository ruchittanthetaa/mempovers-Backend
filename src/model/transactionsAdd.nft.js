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
        nonce:{
            type:String
        },
        blockHash:{
            type:String
        },
        transactionIndex:{
            type:String
        },
        to:{
            type:String
        },
        value:{
            type:String
        },
        gas:{
            type:String
        },
        gasPrice:{
            type:String
        },
        isError:{
            type:String
        },
        txreceipt_status:{
            type:String
        },
        input:{
            type:String
        },
        contractAddress:{
            type:String
        }, 
        cumulativeGasUsed:{
            type:String
        },  
        gasUsed:{
            type:String
        },
        confirmations:{
            type:String
        },
        methodId:{
            type:String
        },
        functionName:{
            type:String
        }

    }]
}, { versionKey: false })

module.exports = mongoose.model("transAdd", tansSchema);
