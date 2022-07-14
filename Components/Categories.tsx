import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../Services";
const Categories = () => {
  const [categories, setCategories]: any = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg mb-8 p-8 pb-12 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">categories</h3>
      {categories.map((category: any) => {
        return (
          <Link href={`/category/${category.slug}`} key={category.slug}>
            <span className="cursor-pointer block pb-3 mb-3">
              {category.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
