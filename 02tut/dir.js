const fs = require('fs');


if(!fs.existsSync('./newfiles')){

    fs.mkdir('./newfiles', ()=>{
    
        console.log("new directory created");
    })
}
