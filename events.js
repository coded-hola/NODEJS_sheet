//  THE EVENT EMITTER RETURNS A CLASS WITH OBJECTS
const EventEmitter = require('events');

const emitter = new EventEmitter(); // OBJECT OF THE EVENTS


emitter.on('login', (log) => {
    console.log('login successfully : ' + log);
});

emitter.emit('login', {"log": "great", "lag": 'good'});


