const axios = require("axios");
const singleTrnNft = require("../model/singleTrn.nft");
const internalTran = require("../model/internalTran.nft");
const tokenTrans = require("../model/tokenTrans.nft");
const transAdd = require("../model/transactionsAdd.nft");
const tokenTransEvent = require("../model/tokentransferEvents.nft");
const verifiedcontract = require("../model/verifiedcontract.nft");

// Single Address ----Api
const storeTnx = (req, res) => {
  try {
    const endpoint =
      "https://api.etherscan.io/api?module=account&action=balance&address=0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b&tag=latest&apikey=27HREKFEHTR3RYD3KZT7IYP6Z738HJ93HA";

    axios
      .get(endpoint)
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        singleTrnNft(data).save();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
    return res.status(200).send({
      status: false,
      code: 500,
      message: "Something went wrong!",
      data: {},
    });
  }
};

// Get a list of 'Normal' Transactions By Address
const transactionsAdd = (req, res) => {
  try {
    const endpoint =
      "https://api.etherscan.io/api?module=account&action=txlist&address=0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b&startblock=0&endblock=99999999&page=1&offset=1000&sort=desc&apikey=27HREKFEHTR3RYD3KZT7IYP6Z738HJ93HA";

    axios
      .get(endpoint)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        transAdd(data).save();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
    return res.status(200).send({
      status: false,
      code: 500,
      message: "Something went wrong!",
      data: {},
    });
  }
};

// // Get a list of 'Internal' Transactions by Address
const transactionsInternal = (req, res) => {
  try {
    const endpoint =
      "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b&startblock=0&endblock=99999999&page=1&offset=10000&sort=desc&apikey=27HREKFEHTR3RYD3KZT7IYP6Z738HJ93HA";

    axios
      .get(endpoint)
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        internalTran(data).save();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
    return res.status(200).send({
      status: false,
      code: 500,
      message: "Something went wrong!",
      data: {},
    });
  }
};

// // Get a list of 'ERC20 - Token Transfer Events' by Address
const tokenTran = (req, res) => {
  try {
    const endpoint =
      "https://api.etherscan.io/api?module=account&action=tokentx&address=0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b&page=1&offset=10000&startblock=0&endblock=99999999&sort=desc&apikey=27HREKFEHTR3RYD3KZT7IYP6Z738HJ93HA";

    axios
      .get(endpoint)
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        tokenTrans(data).save();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
    return res.status(200).send({
      status: false,
      code: 500,
      message: "Something went wrong!",
      data: {},
    });
  }
};

// Get a list of 'ERC721 - tokentransferEvents' by Address
const tokenTranevent = (req, res) => {
  try {
    const endpoint =
      "https://api.etherscan.io/api?module=account&action=tokennfttx&address=0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b&page=1&offset=10000&startblock=0&endblock=99999999&sort=desc&apikey=27HREKFEHTR3RYD3KZT7IYP6Z738HJ93HA";

    axios
      .get(endpoint)
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        tokenTransEvent(data).save();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
    return res.status(200).send({
      status: false,
      code: 500,
      message: "Something went wrong!",
      data: {},
    });
  }
};

// Get Contract Source Code for Verified Contract Source Codes
const verifiedcontractSourceCode = (req, res) => {
  try {
    const endpoint =
      "https://api.etherscan.io/api?module=contract&action=getsourcecode&address=0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b&apikey=27HREKFEHTR3RYD3KZT7IYP6Z738HJ93HA";

    axios
      .get(endpoint)
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        verifiedcontract(data).save();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
    return res.status(200).send({
      status: false,
      code: 500,
      message: "Something went wrong!",
      data: {},
    });
  }
};

module.exports = {
  storeTnx,
  transactionsAdd,
  transactionsInternal,
  tokenTran,
  tokenTranevent,
  verifiedcontractSourceCode,
};
