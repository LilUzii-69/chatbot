import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchExecutivePosts } from "../services/fetchExecutive"; // Replace with your API module path
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ExecutivePost {
  id: number;
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
  };
  title: {
    rendered: string;
  };
  center: boolean;
  excerpt: {
    rendered: string; // Add this property to match your data structure
  };
}

const ExecutiveSlider = () => {
  const [executivePosts, setExecutivePosts] = useState<ExecutivePost[]>([]);

  useEffect(() => {
    // Fetch executive posts when the component mounts
    fetchExecutivePosts()
      .then((data) => setExecutivePosts(data))
      .catch((error) => console.error(error));
  }, []);

  const sliderSettings = {
    infinite: true, //enable infinite loop
    speed: 500, // change speed
    slidesToShow: 3, // Display 3 columns
    slidesToScroll: 1, // slide to scroll per speed
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set the speed (in milliseconds) for auto-sliding
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="center-mode-slider-container">
      <Slider {...sliderSettings}>
        {executivePosts.map((post) => (
          <div key={post.id} className="slider-item">
            <center>
              <img
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                className="executive-pic"
              />
              <h4>{post.title.rendered}</h4>
              <div
                className="line-clamp mb-2"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </center>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExecutiveSlider;
