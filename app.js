const fs = require('fs');

fs.writeFile('file.txt' , "this is somethhing new" , (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("yup created");
    }
})

