// THIS HELPS TO EXPORTS FOR OTHERS TO SEE AND BE ABLE TO USE AS A FUNCTION

const hellojs = function(name){
    console.log(`Hello ${name}`);
}

const url = `www.google.com`;

module.exports.hellojs = hellojs;
module.exports.url = url;