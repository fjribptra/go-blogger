export function titleToSlug(title: string) {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, '') // Remove non-alphanumeric characters
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
      .replace(/[-]+/g, '-'); // Replace multiple dashes with a single dash
  
    return slug;
  }