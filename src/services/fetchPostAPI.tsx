const baseUrl = process.env.REACT_APP_BASE_URL || ""; // Use a default value if the variable is not set

const fetchPost = async (postId: string) => {
  // Add postId as an argument
  try {
    const response = await fetch(`${baseUrl}/wp/v2/posts/${postId}`); // Include postId in the URL
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching post:", error);
    throw error;
  }
};

export { fetchPost };
