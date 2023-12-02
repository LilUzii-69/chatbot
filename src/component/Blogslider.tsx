import React, { useEffect, useState } from "react";
import { fetchLatestPosts } from "../services/HomePostAPI";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSlider: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchLatestPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const settings = {
    dots: true, //Display dot navigation
    infinite: true, //enable infinite loop
    speed: 500, // change speed
    slidesToShow: 3, // Display 3 columns
    slidesToScroll: 1, // slide to scroll per speed
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 5000, // Set the speed (in milliseconds) for auto-sliding
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust the number of columns for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjust the number of columns for mobile screens
        },
      },
    ],
  };

  return (
    <div className="blog-slider-container">
      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="thumbnail">
              {post._embedded && post._embedded["wp:featuredmedia"] && (
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                />
              )}
            </div>
            <div className="blog-content">
              <h3 className="title-line-clamp">{post.title.rendered}</h3>
              <div
                className="line-clamp mb-2"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link to={`/blog/${post.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
