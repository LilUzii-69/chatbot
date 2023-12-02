const baseUrl = process.env.REACT_APP_BASE_URL || ""; // Use a default value if the variable is not set

const fetchLatestPosts = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/wp/v2/posts?per_page=6&_embed&categories=5`
    ); // Include _embed to get featured media
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching latest posts:", error);
    throw error;
  }
};

export { fetchLatestPosts };
