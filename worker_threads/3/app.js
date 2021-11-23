const { StaticPool } = require('node-worker-threads-pool');

let numbers = [40, 23, 5, 35];

// Create a static worker pool with 8 workers
const pool = new StaticPool({
    size: 5,
    task: './worker.js'
})

// numbers.map((number) => {
//     pool.exec({ num: number }).then( result => [
//         console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
//     ]);
// });

numbers.forEach(number => {
    pool.exec({ num: number }).then( result => [
        console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
    ])
});

console.log("Execution in the parent thread complete");

// currently running node version 10.19.0. Thus to use worker-threads the --experimental-woker flag must be used
// node --experimental-worker app.js
