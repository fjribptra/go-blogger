import BlogCard from "./BlogCard";
import blogDatas from "@/dummy.json"

export default function BlogCards() {
    return (
        <div className="grid grid-cols-4 gap-5">
        {blogDatas.map((data) => (
        <BlogCard datas={data}/>
        ))}
        </div>
    )
}