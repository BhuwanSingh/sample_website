// const readline = require("readline");

// let rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// let a = rl.input;

// console.log(a + 10);

const prompt = require('prompt');
prompt.start();

prompt.get(['this'] , (err, result) => {
    if(err) {console.log(err);}
    console.log(parseInt(result.this) + 12);
})