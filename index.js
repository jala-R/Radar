const express=require("express"),
    app=express(),
    axios=require("axios");

//configs
app.use(express.static("./static/"))

app.get("/",(req,res)=>{
    res.send("dsdscsd");
})

//convert eng search to lat log
app.get("/getLatLog",async (req,res)=>{
    try{
        const {location}=req.query;
        const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${process.env.GEOCODINGAPITOKEN}&limit=1`;
        const coordinates=await axios(url);
        let latLog={lat:coordinates.data.features[0].center[1],log:coordinates.data.features[0].center[0]};
        res.send(latLog)
    }catch(err){
        res.status(503).send(err.message);
    }
})


app.listen(process.env.PORT,()=>{
    console.log(`server on ${process.env.PORT}`)
})