import BlogCards from "@/components/BlogCards";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-7 flex flex-col gap-5">
      <h1 className="font-bold text-5xl">Posts</h1>
      <Link href={`/posts/create`} className="bg-green-600 w-fit text-white px-5 py-2 rounded-md">Add Blog</Link>
      <div>
        <BlogCards />
      </div>
    </div>
  );
}
