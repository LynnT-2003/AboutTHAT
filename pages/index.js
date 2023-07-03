import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);
  console.log("FETCHED POSTS IN INDEX", posts);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it once to set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto px-8 lg:px-10 mb-8">
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

        {isMobile && (
          <div className="flex justify-center py-0">
            <button
              className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
              onClick={handleScrollToTop}
            >
              Back to Top
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
