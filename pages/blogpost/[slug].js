import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Slug.module.css";
import * as fs from "fs";
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <h1>{blog && blog.title}</h1>
      <p>{blog && blog.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-node" } },
      { params: { slug: "how-to-learn-python" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const {slug} = context.params
  console.log(context.params)
  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {

//   const {slug} = context.query
//   let data = await fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`)
//   let myBlog = await data.json()
//   console.log(myBlog)
//   return {
//     props: {myBlog}, // will be passed to the page component as props
//   }
// }

export default Slug;
