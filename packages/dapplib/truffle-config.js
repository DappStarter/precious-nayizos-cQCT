require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember slow just envelope orange tree'; 
let testAccounts = [
"0x6cde5b07b302eab3c0c80eed72b6e843991fec291cf5f7abb5c0ab1cdbdd55e5",
"0x18ccbca80b46d9d4088179673cf7aafd52c0b67c4eb9b6a6cc0592472d05c298",
"0x11fec3a5e8ef49d43d25e83efa2ab91747583a3a3eb8eeea05bcbb9d7c01ac44",
"0x25150f4d9071d83b605a1949471c3b1c79fedbbea562a5250ce53a500b96b92d",
"0x327a9a7b39ee8965fd5e2e2b9a64b1282dbdfb2ae0f0aba1764a4324979f32ac",
"0x7aa1f0bb224af82724770d23562d49e0af7a718aa76c7c35ed761c44f172ceb3",
"0x9ab314c657e834dc646306a3ac141a6637984268ef916309e3c60cc18b5811ef",
"0xd97df1c3e00fb7b6bacd1676e4ca7465bcb044c1deb93107a2beaf299a727273",
"0x49d4fca68a41fe09228bfbcdc634bfb49968682b43025c530cd1f414a35b2c77",
"0x4729994f9b300edcce357d4c861aef161bfe9adcfc147f8f8ab466a44dc14515"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


