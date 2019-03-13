const fs=require('fs');
const sha256=require('sha256');
const date=require('./datetime.js');

function dt()
{
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
return dateTime;
};




var blockchain=[];
var blocknumber;
blocknumber=1;
data='AKP';

    var block= { 
    blocknumber,
     data,
     timestamp:dt(),
     current_hash:sha256(data+dt()+blocknumber),
     previous_hash:0,

    };
    blocknumber=blocknumber+1;

blockchain.push(block);
console.log(blockchain);
console.log(blockchain.length);