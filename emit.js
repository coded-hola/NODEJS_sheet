const Logger = require('./logger');
const logger = new Logger();

logger.on("logged", (arg) => {
    console.log('loading...' + arg);
})

logger.log("message");
