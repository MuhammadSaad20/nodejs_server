// console.log("Starting Node...")

// const Person =require('./person');
// // console.log(person);
// // console.log(person.name)

// const person1= new Person("M SaaD", 21);
// person1.greetings()

// const Logger=require('./logger')

// const logger=new Logger();
// logger.on('message',data=>console.log('Called Listener',data));

// logger.log('Hello World!');

const fs=require('fs');
const http=require('http');
const path=require('path');

const server=http.createServer((req,res)=>{

    // if(req.url == '/'){

    //     fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content)
    //     })
    
    // }

    // if (req.url == '/about') {

    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content)
    //     })

    // }
    // //API or Microservices
    if (req.url == '/api/users') {

        const users=[
                     {name:'Saad', age:21},
                     {name:'Zaid', age:18}
                    ];
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
       
    }
    //elegant or dynamic ways to calls the server
    let filePath=path.join(__dirname,'public',req.url == '/' ? 'index.html' : req.url)
    // console.log(filePath);
    // res.end()
    
    //extension of filepath
    let extname=path.extname(filePath)
    //initual content type
    let contentType='text/html'
    switch (extname){
        case '.js':
            contentType='application/js'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }
    
    fs.readFile(filePath, (err,content)=>{
       if(err){
              
            
            if (err.code == "ENOENT") {
               // Page not found
               fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                      
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(content, "utf8")
                });
            }

             else{
                    res.writeHead(500);
                    res.end(`Serever Error: ${err.code}`);
            }
        
        }
    
      else{
        
        res.writeHead(200,{'Content-Type':contentType});
        res.end(content,'utf8');
        }
    
    })  

});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`Server Runing on port ${PORT}`)); 