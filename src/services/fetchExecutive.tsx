const baseUrl = process.env.REACT_APP_BASE_URL || ""; // Use a default value if the variable is not set

const fetchExecutivePosts = async () => {
  try {
    const response = await fetch(`${baseUrl}/wp/v2/posts?categories=6&_embed`); // Include _embed to get featured media
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching executive posts:", error);
    throw error;
  }
};

export { fetchExecutivePosts };
