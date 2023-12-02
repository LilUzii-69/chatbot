const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchInfoData = async (
  currentPage: number,
  itemsPerPage: number
) => {
  try {
    const response = await fetch(`${baseUrl}/wp/v2/posts/`, {
      method: "GET",
      // Add any headers or query parameters as needed
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching info data:", error);
    throw error;
  }
};
