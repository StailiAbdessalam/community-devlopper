import { PostCard, Categories, PostWidget } from "../Components";
import { getPosts } from "../Services";
import Head from "next/head";
export default function Home({ posts }: any) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Restaurant Benjy</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: any) => (
            <PostCard key={index} post={post.node} />
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

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
