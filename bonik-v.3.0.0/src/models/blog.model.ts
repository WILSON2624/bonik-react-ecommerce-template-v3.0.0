interface Blog {
  id: string;
  slug: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  comments?: number;
  description?: string;
}

export default Blog;
