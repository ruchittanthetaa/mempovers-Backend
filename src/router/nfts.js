const express = require('express');
const router = express.Router();
const nftController = require('../controller/main')
const dataController = require('../controller/datafetch')

// fetch data from Api
router.get("/storeTnx", nftController.storeTnx)
router.get("/transactionsInternal", nftController.transactionsInternal)
router.get("/transadd", nftController.transactionsAdd)
router.get("/tokenTran", nftController.tokenTran)
router.get("/tokenTranEvent", nftController.tokenTranevent)
router.get("/verifiedContract", nftController.verifiedcontractSourceCode)


// fetch data from database
router.get("/token", dataController.token )
router.get("/internal", dataController.internal )
router.get("/singleTrn", dataController.singleTrn )
router.get("/transadds", dataController.transadd )
router.get("/transaddevent", dataController.transaddevents )
router.get("/verifiedcontract", dataController.verifiedContract )


module.exports= router;