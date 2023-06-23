import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { useState, useEffect } from "react";

// const posts = [
//   { title: "React Testing", excerpt: "Learn React Testing" },
//   { title: "React with Tailwind", excerpt: "Learn React with Tailwind" },
// ];

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);
  console.log("FETCHED POSTS IN INDEX", posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>AboutTHAT</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const posts = await getPosts();
//   return {
//     props: { posts },
//   };
// }

// // Fetch data at build time
// export async function getServerSideProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts },
//   };
// }
