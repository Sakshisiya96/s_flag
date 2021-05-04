let fs = require("fs");
let content=process.argv.slice(2);
//console.log(contents);

const flag =[];
const files=[];
 for(let i=0;i<content.length;i++)
 {
     if(content[i].startsWith("-")){
         flag.push(content[i]);
     }
     else{
         files.push(content[i]);
     }
    }
    console.log(flag);
    console.log(files);