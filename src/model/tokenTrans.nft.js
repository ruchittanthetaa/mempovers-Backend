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
        from:{
            type:String
        },
        contractAddress:{
            type:String
        },
        to:{
            type:String
        },
        value:{
            type:String
        },
        tokenName:{
            type:String
        },
        tokenSymbol:{
            type:String
        },
        tokenDecimal:{
            type:String
        },
        transactionIndex:{
            type:String
        },
        gas:{
            type:String
        }, 
        gasPrice:{
            type:String
        },  
        gasUsed:{
            type:String
        },
        cumulativeGasUsed:{
            type:String
        },
        input:{
            type:String
        },
        confirmations:{
            type:String
        }

    }]
}, { versionKey: false })

module.exports = mongoose.model("tokenTrans", tansSchema);
