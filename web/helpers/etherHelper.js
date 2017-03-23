module.exports = function (app) {
	var web3 = app.web3;

	var contract;
	app.attachToContract = attachToContract;

	var contractABI = app.config.smartContract.abi;

	function attachToContract(cb) {
		if(!web3.isConnected()) {
			if (cb) {
					cb({code: 200, title: "Error", message: "check RPC"}, null);
				}
		} else {
			console.log(web3.eth.accounts);
			web3.eth.defaultAccount = web3.eth.accounts[1];
			console.log("web3.eth.defaultAccount:");
			console.log(web3.eth.defaultAccount);
			
			var MyContract = web3.eth.contract(contractABI);

			contract = MyContract.at(app.contractAddress);
			
			if (cb) {
				cb(null, contract);
			}
		}
	}

};