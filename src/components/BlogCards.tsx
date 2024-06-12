import { getAllBlogs } from "@/lib/blogFetch";
import BlogCard from "./BlogCard";

export default async function BlogCards() {
  const blogDatas = await getAllBlogs();
  return (
    <div className="grid grid-cols-4 gap-5">
      {blogDatas.map((data: any) => (
        <BlogCard datas={data} key={data._id} />
      ))}
    </div>
  );
}
