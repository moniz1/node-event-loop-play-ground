# Event loop playground
Start by blocking the event loop and then grandually unblock it.

## Prequisitions

nodejs, c++ build tool (optional if you want to see c++ code in profiling)

## Recipe

Profile: start node cmd by 
```bash
sh profile.sh ./src/filename
```
The bash script basically run node with v8 profiling option and generate a reference file (profile file).

I have 2 jobs for this process, an interval call with timers and a heavy cpu comsumed tasks, currently the interval is blocked and below are attempt to resolve it.

src/instancely.js : a blocking process.

src/promise.js : first attempt to solve the block by promise.

src/nextTick.js : second attempt to solve the block by nextTick.

src/immediate.js : third attempt to solve the block by immediate.

src/timeout.js : fourth attempt to solve the block by timeout.

## Quizz

What is the order in index.js?