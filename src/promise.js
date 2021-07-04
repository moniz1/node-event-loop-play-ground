const crypto = require('crypto');

let isCPUProcessDone = false;

let setIntervalCount = 0;

let interval = setInterval(() => {
  log('interval called', setIntervalCount);
  setIntervalCount++;
  if(isCPUProcessDone && setIntervalCount > 3) clearInterval(interval);
}, 1000)

function log(msg) {
  console.log(new Date(), msg);
}

const hash = crypto.createHash('sha256');
log('start hash')

const promisableHash = () => new Promise((resolve) =>{
    hash.update(crypto.randomBytes(100).toString('hex'));
    resolve();
});

let i = 0;

const startCPUComsumedProcess = async () => {
  while(i < 10e6) {
    i++;
    await promisableHash(i);
  } 
  
  isCPUProcessDone = true;
}

startCPUComsumedProcess();