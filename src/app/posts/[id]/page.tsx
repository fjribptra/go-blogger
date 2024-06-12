import { getBlogById } from "@/lib/blogFetch"

export default async function Page({params}:
    {params: {id:string}}
) {
    const filteredBlogById = await getBlogById(params.id)
    console.log(filteredBlogById)
    return (
        <div className="p-7 flex flex-col gap-5">
            <h1 className="font-bold text-4xl">{filteredBlogById.title}</h1>
            <p>{filteredBlogById.body}</p>
        </div>
    )
}