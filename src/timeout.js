const crypto = require('crypto');

let isCPUProcessDone = false;

let setIntervalCount = 0;

let interval = setInterval(() => {
  log('interval called');
  setIntervalCount++;
  if (isCPUProcessDone && setIntervalCount > 3) clearInterval(interval);
}, 1000)

function log(msg, ...rest) {
  console.log(new Date(), msg, rest);
}

const hash = crypto.createHash('sha256');
log('start hash')

const promisableHash = () => new Promise((resolve) => {
  hash.update(crypto.randomBytes(100).toString('hex'));
  setTimeout(() => resolve(), 0)
});

let i = 0;

const startCPUComsumedProcess = async () => {
  while (i < 10e6) {
    i++;
    await promisableHash(1);
  }

  isCPUProcessDone = true;
}

startCPUComsumedProcess();