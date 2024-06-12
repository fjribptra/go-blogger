import connection from "@/lib/db_connection"
import Blog from "@/models/blog"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, {params}: {params: { id: string }}) {
    const id = params.id
    await connection()
    const blogById = await Blog.findById(id)
    return new NextResponse(JSON.stringify(blogById), { status: 200 }) 
    // return new NextResponse("ok")
}

export async function PUT(request: NextRequest, {params}: {params: { id: string }}) {
    const id = params.id
    const {title, body} = await request.json()
    await connection()
    await Blog.findByIdAndUpdate(id, {title, body})
    return new NextResponse("Blog Updated", { status: 200 })
}