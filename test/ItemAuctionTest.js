const ItemToken = artifacts.require("ItemToken");
const ItemAuction = artifacts.require("ItemAuction");

contract("Auction", (accounts) => {
  it("Should accept nft on creation", async () => {
    nft = await ItemToken.new();
    auctionContract = await ItemAuction.new(nft.address);
    tokens = await nft.tokensOf(accounts[0]);
    await auctionContract.createAuction(tokens[0], accounts[0]);
  });
});

describe("createAuction", () => {
  let nft, auctionContract, tokens;

  before(async () => {});

  // it("Should take ownership of a token", async () => {
  //   const tokenOwner = await nft.ownerOf(tokens[0]);
  //   assert.equal(tokenOwner, auctionContract.address);
  // });

  // it("Should create new auction", async () => {
  //   const auction = await auctionContract.tokenIdToAuction(tokens[0]);
  //   assert.equal(auction[0], accounts[0]);
  //   assert.equal(auction[1].toNumber(), 100);
  // });
});
