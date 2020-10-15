const EventEmitter = require('events');

var url = 'www.google.com';

class Logger extends EventEmitter {
    log(message){
        console.log(message + " delivered");

        this.emit('logged', {log: 'logged'});
    }
}

module.exports  = Logger;
