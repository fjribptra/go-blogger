import connection from "@/lib/db_connection";
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog";

export async function POST(request: Request) {
  const { title, body } = await request.json();
  await connection();
  await Blog.create({ title, body });
  return new NextResponse("Blog Created", { status: 201 });
}

export async function GET() {
  await connection();
  const blogs = await Blog.find();
  return new NextResponse(JSON.stringify(blogs), { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connection();
  await Blog.findByIdAndDelete(id);
  return new NextResponse("Blog Deleted", { status: 200 });
}
