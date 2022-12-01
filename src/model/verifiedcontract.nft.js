const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tansSchema = new Schema(
  {
    result: [
      {
        SourceCode: {
          type: String,
        },
        ContractName: {
          type: String,
        },
        CompilerVersion: {
          type: String,
        },
        OptimizationUsed: {
          type: String,
        },
        Runs: {
          type: String,
        },
        ConstructorArguments: {
          type: String,
        },
        EVMVersion: {
          type: String,
        },
        Library: {
          type: String,
        },
        LicenseType: {
          type: String,
        },
        Proxy: {
          type: String,
        },
        Implementation: {
          type: String,
        },
        SwarmSource: {
          type: String,
        },
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("verifiedcontract", tansSchema);
