Proof of Delivery is a smart oracle developed for the Ethereum blockchain.

## Installation

1. Download zip archive
2. Unpack it
3. Go to the /web folder in terminal and install the dependencies `npm install`
4. Set **environment** in web/config.json (see config.json with placeholders below): `dev` or `live`
5. Set smart contract key points in web/config.json (see config.json with placeholders below):
    * `wallet.test`, `wallet.live`
    * `rpc.test`, `rpc.live`
6. Deploy smart contract into Ethereum.
8. Copy created smart contract address and paste it to the config.json to `contractAddress.test` or `contractAddress.live` depending on your environment.
9. Go to `/web` folder in terminal and start proofofdelivery web application `node app.js`

## License

MIT
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)
