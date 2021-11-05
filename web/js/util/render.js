
var PageType = {
	NoneType: 0,
	ListType: 1,
}

var page_type = 0;

function setPageType(typ) {
	page_type = typ;
}

window.linkedWallet = function(wt, addr) {
	if(wt == WrapperType.NoneType) { // from chainID to net
		wrapper_type = wrapper_check_type();
	} else {
		wrapper_type = wt;
	}

	document.getElementById("id_lab_addr").innerHTML = addr.substr(0, 10) + "...";
	if(page_type == PageType.ListType) {
		
	} 
}

window.linkedUnknownWallet = function() {
	wrapper_type = WrapperType.NoneType;
	document.getElementById("id_lab_addr").innerHTML = lang.ALERT_UNKNOWN_NET;
}

window.onload = function() {
	setTimeout(function() {
		wrapper_connect(WrapperType.TronType, function(addr_tron) {
			if(addr_tron) {
				window.linkedWallet(WrapperType.TronType, addr_tron);
			} else {
				wrapper_connect(WrapperType.HecoType, function(addr_eth) {
					if(addr_eth) {
						window.linkedWallet(WrapperType.NoneType, addr_eth);
					} else {
						window.linkedUnknownWallet();
					}
				}, function(err_eth) {
					window.linkedUnknownWallet();
				});
			}
		}, function(err_tron) {
			wrapper_connect(WrapperType.HecoType, function(addr_eth) {
				if(addr_eth) {
					linkedWallet(WrapperType.NoneType, addr_eth);
				} else {
					window.linkedUnknownWallet();
				}
			}, function(err_eth) {
				window.linkedUnknownWallet();
			});
		});
	}, 500)
}
