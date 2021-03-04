// this is our first connection to connect mongoose


const mongoose=require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/travelgenix",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
// then is know as a promise function
}).then(()=>{
    console.log("connection succesful");
}).catch((er)=>
{
console.log(er);
})


