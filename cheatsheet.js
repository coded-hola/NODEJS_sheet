//  THIS IS JUST A REFERENCE CHEAT FOR NODE JS

const  os = require('os');  // OS MODULES
const fs = require('fs');   // FILE SYSTEM MODULES
const events = require('events');  // EVENTS MODULES
 

// OS 
console.log(os.userInfo());
console.log(os.platform());
console.log(os.release());


// ____________________________________________________________________________


// FILES AND ENVIRONMENT VARIABLE
console.log(__filename);
console.log(__dirname); 
console.log(process.env); //export data = keys;


//_______________________________________________________________________________


// FILES SYSTEMS
console.log(fs);  // ALL ENVIRONMENT VARIABLES

// READ FILES FUNCTION
const readfile = fs.readFileSync('file.txt'); // RETURNS A BUFFER
console.log(readfile.toString());

//CREATE A NEW FILE
fs.writeFileSync('file.txt', 'nodejs is awesome');

// APPEND FILE
fs.appendFileSync('file.txt', "nodejs is super awesome");

// TO COPY A FILE
fs.copyFileSync('file.txt', 'node.txt');
 
// TO RENAME A FILE
fs.renameSync('node.txt', 'js.txt');

// TO DELETE A FILE
fs.unlinkSync('node.txt');

// TO READ A DIRECTORY
const dir = fs.readdirSync(__dirname); // RETURNS AN ARRAY
console.log(dir);

// MAKE A DIR
fs.mkdirSync('filer');

// MOVE TO A DIRECTORY 
fs.renameSync('js.txt', 'filer/js.txt');

// TO WATCH A FILE(ASYNCHRONOUS);
fs.watchFile('filer/js.txt', () => {console.log("Changed")});

//____________________________________________________________________________

// EVENTS
const eventEmitter = new events.EventEmitter(); 

let user = 0;

const EventEmitter = new events.EventEmitter();

EventEmitter.on('userlogin', () => {
	user += 1;
	console.log(`users available = ${user}`);
});

EventEmitter.emit('userlogin');


// EXAMPLE USING THE FILE SYSTEM
 
const fs = require('fs');

const watcher = fs.watch('file.txt');

watcher.on('change', () => {
	console.log('file has been altered');
});



// DNS MODULES

const dns = require('dns'); // DNS MODULES

dns.lookup('google.com', (err, value) => {
	if(err){
		console.log(err);
		return;
	}
	console.log(value);
});

dns.resolve('google.com', (err, value) => {
	if(err){
		console.log(err);
		return;
	}
	console.log(value);
});

dns.reverse('8.8.8.8', (err, value) => {
	if(err){
		console.log(err);
		return;
	}
	console.log(value);
});






