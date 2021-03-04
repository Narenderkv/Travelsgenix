
var mongoose = require('mongoose')
// var conn = mongoose.createConnection("mongodb://localhost:27017/travelgenix",{
//         useCreateIndex:true,
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     // then is know as a promise function
//     }).then(()=>{
//         console.log("connection succesful with 1");
//     }).catch((er)=>
//     {
//     console.log(er);
//     })
var conn2 = mongoose.createConnection('mongodb://localhost:27017/travelgenix_2',{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    // then is know as a promise function
    }).then(()=>{
        console.log("connection succesful with 2");
    }).catch((er)=>
    {
    console.log(er);
    })
