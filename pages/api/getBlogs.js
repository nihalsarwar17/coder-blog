// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getBlogs?slug=how-to-learn-node 
// http://localhost:3000/api/getBlogs?slug=ledsod 
import * as fs from "fs";

export default function handler(req, res) {
//   fs.readFile("blogData/learn-javascript.json", "utf-8", (err, data)=>{
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (error, data)=>{
    // console.log(req.query.slug)
    if (error){
        res.status(404).json({error:"file not found"})
    }
    res.status(200).json(JSON.parse(data)) // object

    // res.status(200).json(data) ==> string
  })
  
}
