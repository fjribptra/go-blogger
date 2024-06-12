export async function getAllBlogs() {
    try {
      const res = await fetch(`${process.env.API_ENDPOINT}/api/blogs`, {
        method: 'GET',
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("failed to fetch blogs");
      }
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }

export async function getBlogById(id: string) {
    const res = await fetch(`${process.env.API_ENDPOINT}/api/blogs/${id}`, {
        method: 'GET'
    })
    const data = await res.json()
    return data
}