const url=require('url')

const myUrl=new URL('http://myweb.com/hello.html?id?=10&status?=active');

//Seralize URL
console.log(myUrl.href);
console.log(myUrl.toString());


//Host (root domain)
console.log(myUrl.host);


//Hosttime (doest not include port num)
console.log(myUrl.hostname)

//Pathname
console.log(myUrl.pathname)
//Serialize Query
console.log(myUrl.search)
//Param Object
console.log(myUrl.searchParams)

//Add param

myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//Loop through param
myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`));
