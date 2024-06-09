import BlogCards from "@/components/BlogCards";

export default function Page() {
  return (
    <div className="p-7 flex flex-col gap-5">
      <h1 className="font-bold text-5xl">Posts</h1>
      <div>
        <BlogCards />
      </div>
    </div>
  );
}
