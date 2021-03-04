const express=require("express");
const path=require("path")
const hbs=require("hbs");
require("./db/conn")

require("./db/conn2")


// new package for signup page
const passport = require('passport'); //this is our main package that will help us create the login signup system
const cookieSession = require('cookie-session'); //this is for using cookies so that our users stay logged in



//end
const User=require("./models/usermess");
const Userregister= require("./models/userregister");


const app=express()

// for signup

app.use(express.json()); //it allows us access the data sent from frontend using req.body
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, `client`))); //here we are saying that our static files I mean html css etc files will be served from this client file

//end





const port=process.env.PORT || 3000
// app.get(path,callback)
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");



app.use(express.static(staticpath));
//it set the root for sort the path
// app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
// app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
// app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
app.set("view engine","hbs");

app.set("views",templatepath);

hbs.registerPartials(partialspath)
//new sign
app.use(cookieSession({
    maxAge: 24*60*60*1000, //it is the total expiration time, here the cookie will be alive for 1 day
    keys: [`abcdefghijklmn`], //here type whatever your want instead of abcdefghijklm, I just typed abcdefghijklm 
  }));
//end

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/service",(req,res)=>{
    res.render("service");
})
app.get("/signin",(req,res)=>{
    res.render("signin");
})
app.get("/about",(req,res)=>{
    res.render("about");
})


 app.get("/package",(req,res)=>{
     res.render("package");
 })
 app.get("/signup",(req,res)=>{
     res.render("signup")
 })
 app.get("/login",(req,res)=>{
     res.render("login");
 })
app.post("/contact",async(req,res)=>
{
    try{
       // res.send(req.body); 
        const userData=new User(req.body);
        await userData.save(); 
        res.status(201).render("index");
    } catch(error){
                 res.status(500).send(error);
        }
    }
)
app.post("/signup",(req,res)=>
{

    try {
        const password=req.body.password;
    const cpassword=req.body.confirmpassword;
    if(password===cpassword){
    userregister({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword
        }).save();
        res.status(201).render("index");
        
    }  else{
        res.send("password are not matching");
    }
    } catch (error) {
        res.status(400).send(error);
    }
    })


    app.post("/login",async(req,res)=>{
        try {
            const email=req.body.email;
            const password=req.body.password;
          const useremail= await signupuser.findOne(email)
             res.send(useremail);
             console.log(useremail);
         
            // console.log(`email ${email} and password is ${password}`);
        } catch (error) {
            res.status(400).send("invalid email")
            
        }






    // try{
    //    // res.send(req.body); 
    //     const userDat=new Userregister(req.body).save();;
    //     conn2.save(); 
    //     res.status(201).render("/login");
    // } catch(error){
    //              res.status(500).send(error);
    //     }
    }
)


app.listen(port,()=>{
    console.log(`server is runing at ${port} port number`);
})