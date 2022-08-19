import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)

  // not generating HTML in page source
  // useEffect(() => {
  //   console.log("useEffect is running");
  //   fetch("http://localhost:3000/api/getBlogFolder")
  //     .then((a) => {
  //       return a.json();
  //     })

  //     .then((parsed) => {
  //       // console.log(parsed);
  //       setBlogs(parsed)
  //     });
  // }, []);
  // console.log(blogs)
  // console.log(props)
 
  return (
    <div className="blogs">
      <div className={styles.container}>
        <h1>Learning Blogs</h1>
        {blogs.map((blogItems)=>{
          return(
            <div key={blogItems.slug}>
              <a href={`/blogpost/${blogItems.slug}`}>
              
              <h3>{blogItems.title}</h3>
              </a>
              <h5>{blogItems.content}</h5>
              <h6>Author: {blogItems.author}</h6>
              </div>
          )
        })}
        
      </div>
    </div>
  );
};



export async function getStaticProps() {
    
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
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}
// export async function getServerSideProps() {
//   let data = await fetch("http://localhost:3000/api/getBlogFolder")
//   let allBlogs = await data.json()
//   console.log(allBlogs)
//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

export default Blog;
