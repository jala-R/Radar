const express=require("express"),
    app=express();

app.get("/",(req,res)=>{
    res.send("dsdscsd");
})


app.listen(process.env.PORT,()=>{
    console.log(`server on ${process.env.PORT}`)
})