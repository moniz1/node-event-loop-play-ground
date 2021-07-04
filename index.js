const { performance } = require('perf_hooks');
function logRq(text) {
    console.log(new Date(), text.toUpperCase());
}
logRq('begin');

setTimeout(() => {
    setTimeout(() => {
        logRq('this is a log from timmer')   
    });
    
    setImmediate(() => {
        logRq('this is a log from set immediate')
    })
}, 0);

queueMicrotask(() => logRq('this is a log from micro tasks'))

const promise = Promise.resolve([]);

promise.then(() => logRq('this is a logg from promise'))

process.nextTick(() => logRq('this is a log from nextTick'))

logRq('after queue events');