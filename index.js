/* //import Web3 from 'web3';

//const web3 = new Web3(window.ethereum);
//await window.ethereum.enable();

if (typeof web3 !== 'undefined') {
       var web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    }
web3.eth.defaultAccount = web3.eth.accounts[0];  
var myContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],'0x8b8F51E604Ac33aa016486915437A441B27c6712');

var contract = myContract.at('0x8b8F51E604Ac33aa016486915437A441B27c6712');
//console.log(myContract);

contract.getInstructor(function(error, result){
    if(!error)
        {
            $('#instructor').html(result[0]+' ('+result[1]+' years old)');
            console.log(result);
        }
    else
        console.error(error);
});

$('#button').click(function() {
    contract.setInstructor($('#name').val(), $('#age').val());
});
 */