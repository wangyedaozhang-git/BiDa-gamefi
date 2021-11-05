var WrapperType = {
	NoneType: 0,
	TronType: 1,
	HecoType: 2,
}

var ChainID = function(wrapper_type) {
	if(wrapper_type == WrapperType.TronType) {
		return "TRX";
	} else if (wrapper_type == WrapperType.HecoType) {
		return "HECO";
	}
}

var wrapper_connect = function(wrapper_type, cb_succ, cb_fail) {
	if(wrapper_type == WrapperType.TronType) {
		tron_connect(cb_succ, cb_fail);
	} else {
		web3_connect(cb_succ, cb_fail);
	}
}

var wrapper_transaction_hash = function(wrapper_type, hash, cb_succ, cb_fail) {
	if(wrapper_type == WrapperType.TronType) {
		tron_transaction_hash(hash, cb_succ, cb_fail);
	} else {
		web3_transaction_hash(hash, cb_succ, cb_fail);
	}
}

var wrapper_check_type = function() {
	var chainID = web3_chainId();
	// For test
	if(chainID == 1578) {
		return WrapperType.HecoType;
	} else {
		return WrapperType.NoneType;
	}

	// For mainnet
	// if(chainID == 128) {
	// 	return WrapperType.HecoType;
	// } else {
	// 	return WrapperType.NoneType;
	// }
}

var wrapper_address = function(wrapper_type) {
	if(wrapper_type == WrapperType.TronType) {
		return tron_address();
	} else {
		return web3_address();
	}
}

var wrapper_zero_address = function(wrapper_type, addr) {
	if(wrapper_type == WrapperType.TronType) {
		return (addr == "410000000000000000000000000000000000000000") || (addr == "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb");
	} else {
		return (addr == "0x0000000000000000000000000000000000000000");
	}
}

var wrapper_to_address = function(wrapper_type, addr) {
	if(wrapper_type == WrapperType.TronType) {
		return tronWeb.address.fromHex(addr);
	} else {
		return addr;
	}
}

var wrapper_erc20_balanceOf = function(wrapper_type, token, cb_succ, cb_fail) {
	if(wrapper_type == WrapperType.TronType) {
		tron_erc20_balanceOf(token, cb_succ, cb_fail);
	} else {
		web3_erc20_balanceOf(token, cb_succ, cb_fail);
	}
}

var wrapper_erc20_allowance = function(wrapper_type, token, cb_succ, cb_fail) {
	if(wrapper_type == WrapperType.TronType) {
		tron_erc20_allowance(tron_nftwrapper_addr(), token, cb_succ, cb_fail);
	} else {
		web3_erc20_allowance(web3_nftwrapper_addr(), token, cb_succ, cb_fail);
	}
}

var wrapper_erc20_approve = function(wrapper_type, token, amount, cb_succ, cb_fail) {
	if(wrapper_type == WrapperType.TronType) {
		tron_erc20_approve(tron_nftwrapper_addr(), token, amount, cb_succ, cb_fail);
	} else {
		web3_erc20_approve(web3_nftwrapper_addr(), token, amount, cb_succ, cb_fail);
	}
}

var wrapper_nftwrapper_buyNFT = function(wrapper_type, token, refer, cb_succ, cb_fail) {
	if(wrapper_type == WrapperType.TronType) {
		tron_nftwrapper_buyNFT(token, refer, cb_succ, cb_fail);
	} else {
		web3_nftwrapper_buyNFT(token, refer, cb_succ, cb_fail);
	}
}

var wrapper_nftwrapper_nftInfo = function(wrapper_type, i, cb_succ, cb_fail) {
	if(wrapper_type == WrapperType.TronType) {
		tron_nftwrapper_nftInfo(i, cb_succ, cb_fail);
	} else {
		web3_nftwrapper_nftInfo(i, cb_succ, cb_fail);
	}
}
