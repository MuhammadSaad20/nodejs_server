const path = require('path')

///Base File name

//full path
console.log(__filename);

//file name
console.log(path.basename(__filename));

//dir name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));


// create path obj
console.log(path.parse(__filename));
console.log(path.parse(__filename).base)

//concate path
console.log(path.join(__dirname,'test','hello.html'))