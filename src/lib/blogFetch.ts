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
        method: 'GET',
        cache: "no-store",
    })
    const data = await res.json()
    return data
}

export async function addBlog({title, body}: {title: string, body:string}) {
  const res = await fetch(`/api/blogs`, 
    {method: "POST",
      body: JSON.stringify({title: title,body: body}),
    })

    const data = await res.json()
    console.log(data)
}

export async function deleteBlog(id: string) {
  const res = await fetch(`/api/blogs?id=${id}`, {
    method: 'DELETE',
  })

  const data = await res.json()
  console.log(data)
}

export async function getBlogByIdForEditForm(id: string) {
  const res = await fetch(`/api/blogs/${id}`, {
    method: 'GET'
  })
  return res.json()
}

export async function updateBlogById(id: string, {title, body}: {title: string, body: string}) {
  const res = await fetch(`/api/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({title, body})
  })
  return res.json()
}