import { PostCard, Categories, POstWindget } from "../Components";
import Head from "next/head";
import { getPosts } from "../Services/index";
const index = ({ posts }:any) => {
  // console.log(posts);
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CREATE Next App</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post: any) => (
          <PostCard key={post.title}  post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <POstWindget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStatitProps() {
  const posts = (await getPosts()) || [];
  console.log(posts);
  return {
    props: { posts },
  };
}

export default index;
