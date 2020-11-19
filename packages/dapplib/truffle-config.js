require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue response oval unveil install canoe army gas'; 
let testAccounts = [
"0x678539d2ae81a23510eb80d22b2e085cbc9fbc556d7687252bd8d32d255b2bd7",
"0xe12cb6eb15309ea8c2980d3a762b0d7f57b00f2fd4da39b2352cde41d58a2ff9",
"0x382db80ed63c9d8ed64de3a13a580b10607a3f2eeaa05f81e94d8f60a28d71e6",
"0xbdf033200b1603ab34c0c9246649f44d22a98eb5983d49a28938a899105f3044",
"0x7408a378b388885a2efa98ea670b82d06b29ec6858b5a828ef22b439cce2355c",
"0x6e36d86305110d4c3a34173205dd783f35bfd4b78c91a7d8f7741e6a681a433b",
"0xa6e0b5ff11b75bcc1bcd2a42839e0d9433d0b4b28912db925d04dbc9bacda938",
"0xf83c1615f0457c6fe0d180d225a21f10b5d0ed5b1a6bc8c942831daa9bca92b8",
"0x6c50a86ac7e250844a1467ae2a6736663a8cd581266d2842cfe1602ae2f86096",
"0x4b4fefe9d9eb580e4b8422f2fbfce5699f4d2f4bbfc603b5ab864626ccbf4c3f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
