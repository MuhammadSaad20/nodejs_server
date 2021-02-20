const path=require('path')
const fs=require('fs')

//make dir 

// fs.mkdir(path,folder name, options , callbac)

// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
    
//     console.log("folder created..");
// })

//write file
// fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello file system1', err => {
//     if (err) throw err;
//     console.log("file created..");
    
//     //appnd file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello file system1 append', err => {
//         if (err) throw err;
//         console.log("file created..");

//     })
// })


//read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
//     if (err) throw err;
//     console.log(data);

// })

//rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'helloWorld.txt'), (err) => {
    if (err) throw err;
    console.log('file rename...');

})