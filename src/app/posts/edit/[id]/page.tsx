"use client"
import { getBlogById, getBlogByIdForEditForm, updateBlogById } from "@/lib/blogFetch";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function CreateBlogPage({params}: {params: {id: string}}) {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        getBlogByIdForEditForm(params.id).then((data) =>{
            setTitle(data.title)
            setBody(data.body)
        })
    }, []);

    async function handleEditBlog(e: FormEvent) {
        e.preventDefault()
        await updateBlogById(params.id, {title, body})
        router.push('/posts')
        router.refresh()
    }
    return (
        <div className="p-7">
            <h1 className="font-bold text-4xl">Edit Blog</h1>
            <form onSubmit={handleEditBlog} className=" mt-5 flex flex-col gap-5 items-start">
            <TextField className="w-full" id="outlined-basic" label="Title" variant="outlined" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea className="p-5 border border-slate-400 rounded-md w-full" name="body" cols={30} rows={10} placeholder="Blog Body" defaultValue={body} onChange={(e)=> setBody(e.target.value)}></textarea>
            <button type="submit" className="border border-slate-400 rounded-md bg-green-600 text-white py-2 px-5">Edit Blog</button>
            </form>
        </div>
    )
}