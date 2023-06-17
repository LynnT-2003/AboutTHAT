import Head from "next/head";

const posts = [
  { title: "React Testing", excerpt: "React Testing is cool" },
  { title: "React with Tailwind", excerpt: "React with Tailwind is cool" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      Hello
      <Head>
        <title>AboutTHAT</title>
      </Head>
      <h1>AboutTHAT</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
