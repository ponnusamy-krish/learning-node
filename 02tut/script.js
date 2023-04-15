const fsPromises= require("fs").promises
const path = require('path');


const fileOperation = async () =>{

try{
        const data = await fsPromises.readFile(path.join(__dirname, 'startup.txt'), 'utf-8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, "intro.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "intro.txt"), "\t\t\t\tnice to see you people from another planet");
        await fsPromises.unlink(path.join(__dirname, "new.txt"));
}catch(err){
console.error(err);
}

}


fileOperation();


// fs.readFile(path.join(__dirname, "new.txt"),'utf-8', (err,data) =>{
//     if (err) throw err;
//     console.log(data.toString());
// })



