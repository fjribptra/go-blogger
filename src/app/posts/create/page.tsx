import { TextField } from "@mui/material";

export default function CreateBlogPage() {
    return (
        <div className="p-7">
            <h1 className="font-bold text-4xl">Create Blog</h1>
            <form className=" mt-5 flex flex-col gap-5 items-start">
            <TextField className="w-full" id="outlined-basic" label="Title" variant="outlined" />
            <textarea className="p-5 border border-slate-400 rounded-md w-full" name="body" cols={30} rows={10} placeholder="Blog Body"></textarea>
            <button className="border border-slate-400 rounded-md bg-green-600 text-white py-2 px-5">Create Blog</button>
            </form>
        </div>
    )
}