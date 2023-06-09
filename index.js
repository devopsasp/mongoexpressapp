import { db } from "./mongoconnect.js";
import express from 'express'
import path from 'path'
import ViewList from "./templatefunc.js";
const app=express()
app.use(express.urlencoded({extended:true}))

var samplelist=[]
const options = {
    root: path.join("../mongoexpressapp/public/")
};
app.get("/",(req,res)=>{
    res.sendFile('index.html',options,(err)=>{
        if(err) console.log(err)
        console.log("sent")
      })
})

app.post("/saveorder",async (req,res)=>{
    console.log(req.body)
  const res2=await db.collection("mycolitems").insertOne(req.body)
   console.log(res2)
   res.redirect("/sample")
})
app.get("/sample",async (req,res)=>{
    const res2=await db.collection("mycolitems").find().toArray((err,result)=>{
       
          console.log(result)
       
    })
res.send(ViewList(res2))


    
})
app.listen(5050,()=>{console.log("app listening")})

