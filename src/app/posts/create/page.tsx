"use client";

import { addBlog } from "@/lib/blogFetch";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CreateBlogPage() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const router = useRouter()

  async function handleSubmitCreateBlog(e: FormEvent) {
    e.preventDefault();
    console.log("ok");
    await addBlog({ title, body });
    router.push('/posts')
    router.refresh()
  }

  return (
    <div className="p-7">
      <h1 className="font-bold text-4xl">Create Blog</h1>
      <form onSubmit={handleSubmitCreateBlog} className=" mt-5 flex flex-col gap-5 items-start">
        <TextField className="w-full" id="title" label="Title" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
        <textarea className="p-5 border border-slate-400 rounded-md w-full" id="body" name="body" cols={30} rows={10} placeholder="Blog Body" onChange={(e) => setBody(e.target.value)}></textarea>
        <button type="submit" className="border border-slate-400 rounded-md bg-green-600 text-white py-2 px-5">
          Create Blog
        </button>
      </form>
    </div>
  );
}
