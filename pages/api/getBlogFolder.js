// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getBlogFolder
import * as fs from "fs";

export default async function handler(req, res) {
  let allBlogs = []
  let myfile;
  let data = await fs.promises.readdir("blogData");

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
     myfile = await fs.promises.readFile("blogData/" + item, "utf-8");
    // console.log(myfile);
    allBlogs.push(JSON.parse(myfile))
    // console.log(allBlogs[index]);

  }
  // console.log(allBlogs);

  res.status(200).json(allBlogs ); // object
}








// export default function handler(req, res) {
//   fs.readdir("blogData", (err, data)=>{
//     console.log(data)
//     // res.status(200).json(data) ==> string
//     res.status(200).json(data) // object
//   })

// }
