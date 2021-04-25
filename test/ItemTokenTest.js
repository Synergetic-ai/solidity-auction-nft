const ItemToken = artifacts.require('ItemToken')
const {
  BN, // Big Number support
  constants, // Common constants, like the zero address and largest integers
  expectEvent, // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers')

contract('ItemToken', (accounts) => {
  it('Should make first account an owner', async () => {
    console.log('accounts', accounts)
    let instance = await ItemToken.deployed()
    let owner = await instance.owner()
    assert.equal(owner, accounts[0])
  })

  it('creates token with specified owner', async () => {
    console.log(accounts)
    let instance = await ItemToken.deployed()
    let minter = accounts[1]
    await instance.mint(minter)
    const token1 = await instance.tokenOfOwnerByIndex(minter, new BN(0))
    const token2 = await instance.tokenByIndex(new BN(0))
    const tokenURI = await instance.tokenURI(token1)
    assert.equal(tokenURI, 'https://localhost/0')
    assert.equal(token1.toString(), token2.toString())
  })
})
