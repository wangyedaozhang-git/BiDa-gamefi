// web3 basic
var web3_erc20_abi = function() {
	return [{"inputs":[{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
}

var web3_nftwrapper_abi = function() {
	return [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blessPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"nftInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nft","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oneDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showDownCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_price","type":"uint256"},{"name":"_flag","type":"uint8"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_refer","type":"address"}],"name":"buyNFT","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"}],"name":"setReceiver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dev","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"exists","type":"uint8"},{"name":"referrer","type":"address"},{"name":"downIndex","type":"uint8"},{"name":"nftIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"giftPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"b","type":"bytes32"}],"name":"bytesToUint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dev","type":"address"}],"name":"setDev","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"tokens","outputs":[{"name":"flag","type":"uint8"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nft","type":"address"}],"name":"setNft","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"receiver","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_dev","type":"address"},{"name":"_nft","type":"address"},{"name":"_receiver","type":"address"},{"name":"_startTime","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
}

// For test
var web3_nftwrapper_addr = function() {
	return "";
}

// For mainnet
// var web3_nftwrapper_addr = function() {
// 	return "";
// }

var web3_chainId = function() {
	if(ethereum) {
		return Number(ethereum.chainId);
	} else {
		return 0;
	}
}

// web3 connect
var web3_connect = function(cb_succ, cb_fail) {
	if(ethereum) {
		web3 = new Web3(ethereum);
		ethereum.enable().then(function() {
			var account = ethereum.selectedAddress;
			cb_succ(account);
		}).catch(function(err) {
			cb_fail(err);
		})
	} else {
		cb_fail();
	}
}

var web3_transaction_hash = function(hash, cb_succ, cb_fail) {
	if(ethereum) {
		web3.eth.getTransaction(hash, function (err, result) {
			if(err) {
	 			cb_fail(err);
	 			return;
	 		}
	 		if(result.error) {
	 			cb_fail(result.error.message);
	 			return;
	 		}
	 		cb_succ(result);
		})
	}
}

// web3 api --- ERC20
var web3_address = function() {
	if(ethereum) {
		return ethereum.selectedAddress;
	} else {
		return false;
	}
}

var web3_erc20_balanceOf = function(token, cb_succ, cb_fail) {
	if(web3) {
		var addr = ethereum.selectedAddress;
		var contractAddr = token;
    	var abi = web3_erc20_abi();
    	var contr = new web3.eth.Contract(abi, contractAddr);
    	contr.methods.balanceOf(addr).call({from: addr}, function(err, result) {
    		if(err) {
    			cb_fail(err);
    			return;
    		}
    		if(result.error) {
    			cb_fail(result.error.message);
    			return;
    		}
    		cb_succ(result);
    	});
    }
}

var web3_erc20_allowance = function(router, token, cb_succ, cb_fail) {
	if(web3) {
		var addr = ethereum.selectedAddress;
		var contractAddr = token;
    	var abi = web3_erc20_abi();
    	var contr = new web3.eth.Contract(abi, contractAddr);
    	contr.methods.allowance(addr, router).call({from: addr}, function(err, result) {
    		if(err) {
    			cb_fail(err.message);
    			return;
    		}
    		if(result.error) {
    			cb_fail(result.error.message);
    			return;
    		}
    		cb_succ(result);
    	});
    }
}

var web3_erc20_approve = function(router, token, amount, cb_succ, cb_fail) {
	if(web3) {
		var addr = ethereum.selectedAddress;
		var contractAddr = token;
    	var abi = web3_erc20_abi();
    	var contr = new web3.eth.Contract(abi, contractAddr);
    	contr.methods.approve(router, amount).send({from: addr}, function(err, result) {
    		if(err) {
    			cb_fail(err.message);
    			return;
    		}
    		if(result.error) {
    			cb_fail(result.error.message);
    			return;
    		}
    		cb_succ(result);
    	})
	} else {
		cb_fail("wallet not found");
	}
}

// web3 api --- nftwrapper
var web3_nftwrapper_buyNFT = function(token, refer, cb_succ, cb_fail) {
	if(web3) {
		var addr = ethereum.selectedAddress;
		var contractAddr = web3_nftwrapper_addr();
    	var abi = web3_nftwrapper_abi();
    	var contr = new web3.eth.Contract(abi, contractAddr);
    	contr.methods.buyNFT(token, refer).send({from: addr}, function(err, result) {
    		if(err) {
    			cb_fail(err.message);
    			return;
    		}
    		if(result.error) {
    			cb_fail(result.error.message);
    			return;
    		}
    		cb_succ(result);
    	})
	} else {
		cb_fail("wallet not found");
	}
}

var web3_nftwrapper_nftInfo = function(i, cb_succ, cb_fail) {
	if(web3) {
		var addr = ethereum.selectedAddress;
		var contractAddr = web3_nftwrapper_addr();
    	var abi = web3_nftwrapper_abi();
    	var contr = new web3.eth.Contract(abi, contractAddr);
    	contr.methods.nftInfo(i).call({from: addr}, function(err, result) {
    		if(err) {
    			cb_fail(err.message);
    			return;
    		}
    		if(result.error) {
    			cb_fail(result.error.message);
    			return;
    		}
    		cb_succ(result);
    	});
    }
}
