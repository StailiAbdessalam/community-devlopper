import { PostCard, Categories, POstWindget } from "../Components";
import Head from "next/head";
const index = () => {
  const posts = [
    { title: "React Testing", excerpt: "learn React TEsting" },
    { title: "React with tailxwind", excerpt: "learn React with tailwind" },
  ];
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CREATE Next App</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index) => {
            return (
              <div>
                <PostCard post={post} key={post.title} />
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <POstWindget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
