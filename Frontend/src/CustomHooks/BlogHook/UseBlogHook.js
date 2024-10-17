import { useState, useEffect } from "react";
import { fetchBlogs } from "../../service/BlogService/BlogsService"

const useBlogHook = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBlogs = async () => {
    try {
      const blogsData = await fetchBlogs();
      setBlogs(blogsData);
    } catch (err) {
      setError("Error fetching blogs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs, loading, error, getBlogs };
};

export default useBlogHook;
