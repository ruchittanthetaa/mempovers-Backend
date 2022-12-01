const tokenTrans = require("../model/tokenTrans.nft");
const internalTran = require("../model/internalTran.nft");
const singleTrnNft = require("../model/singleTrn.nft");
const transAdd = require("../model/transactionsAdd.nft");
const tokenTransEvent = require("../model/tokentransferEvents.nft");
const verifiedcontract = require("../model/verifiedcontract.nft");

const token = async (req, res) => {
  try {
    const data = await tokenTrans.find({});
    res.status(200).send(
      data
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e,
    });
  }
};

const internal = async (req, res) => {
  try {
    const data = await internalTran.find({});
    res.status(200).send(
      data
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e,
    });
  }
};

const singleTrn = async (req, res) => {
  try {
    const data = await singleTrnNft.find({});
    res.status(200).send(
      data
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e,
    });
  }
};

const transadd = async (req, res) => {
  try {
    const data = await transAdd.find({});
    res.status(200).send(
      data
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e,
    });
  }
};

const transaddevents = async (req, res) => {
  try {
    const data = await tokenTransEvent.find({});
    res.status(200).send(
      data
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e,
    });
  }
};

const verifiedContract = async (req, res) => {
  try {
    const data = await verifiedcontract.find({});
    // console.log(data);
    res.status(200).send(
      data
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e,
    });
  }
};

module.exports = {
  token,
  internal,
  singleTrn,
  transadd,
  transaddevents,
  verifiedContract,
};
 