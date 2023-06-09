import { MongoClient } from "mongodb";
const client=new MongoClient("mongodb://127.0.0.1:27017/")
await client.connect()
export const db=client.db("sample")
try{
    const collection=await db.createCollection("mycolitems")
}
catch(err)
{
    console.log("collection already exist")
}


/*res.then((e)=>console.log(e))
const res1=db.collection("mycol")
const res2=await res1.find().toArray((err,result)=>{
    
    console.log(result)
})
console.log(res2)*/
