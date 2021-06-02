const {readFile , readFileSync} = require('fs').promises;

async function hello(){
    const file = await readFile('./file.txt' , 'utf8');
    console.log(file);
}

console.log("hsaoe ");

hello();