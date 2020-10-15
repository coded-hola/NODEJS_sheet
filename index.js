const myModule = require('./modules');
const os = require('os');

// THIS CREATES A CLASS 
const EventEmitter = require('events'); 


const totalMem = os.totalmem();
const freeMem = os.freemem();


console.log(myModule.hellojs('john'));

console.log(`total memory: ${totalMem}`);
console.log(`free memory: ${freeMem}`);



