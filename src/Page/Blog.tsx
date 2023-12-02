import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../services/fetchPostAPI";

const Blog: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        if (!postId) {
          throw new Error("postId is not defined");
        }

        const data = await fetchPost(postId); // Use postId to fetch the post
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Error loading blog post.</div>;
  }

  return (
    <div className="blog-post-container">
      <center>
        <h1>{post.title.rendered}</h1>
      </center>

      <div
        className="margin-post"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

export default Blog;
