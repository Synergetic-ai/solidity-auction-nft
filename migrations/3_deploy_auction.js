var ItemToken = artifacts.require("ItemToken");
var ItemAuction = artifacts.require("ItemAuction");

module.exports = function (deployer) {
  deployer.deploy(
    ItemAuction,
    ItemToken.address,
    "0x055239645aEB11c5a532fe77c36e58Aa75185CcB"
  );
};
