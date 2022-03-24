//https://ropsten.infura.io/v3/fce2686d400a47579c510224e55281ad

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'your gateway (infura or other)',
      accounts: ['Your private key']
    }
  }
}
