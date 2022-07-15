import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSimilarPosts, getRecentPosts } from "../Services";
const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => {
        setRelatedPosts(res);
      });
    } else {
      getRecentPosts().then((res) => {
        setRelatedPosts(res);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg mb-8 p-8 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts?.map((post: any) => {
        return (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img
                src={post.featuredImages.url}
                height="60px"
                width="60px"
                className="align-middle rounded-full"
                alt={post.title}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link href={`/post/${post.slug}`}  key={post.title} className="text-md">
                {post.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
