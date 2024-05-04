const { log } = require('console')
const fs=require('fs')

// fs.writeFile("input.txt","Sudharshana",(err)=>
// {
//       if(err)
//         log("The error"+err)
//     log("saved!")
// })


fs.readFile("input.txt",(err,data)=>
{
    if(err) log("The error is "+err)
    log("the data is "+data)

})