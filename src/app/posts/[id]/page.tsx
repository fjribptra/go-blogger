"use client"
import blogDatas from "@/dummy.json"
export default function Page({params}:
    {params: {id:number}}
) {
    const filteredBlogData: { 
        id: number, 
        title: string, 
        body: string }[] = blogDatas.filter((data) => data.id == params.id)

    return (
        <div className="p-7 flex flex-col gap-5">
            <h1 className="font-bold text-4xl">{filteredBlogData[0].title}</h1>
            <p>{filteredBlogData[0].body}</p>
        </div>
    )
}