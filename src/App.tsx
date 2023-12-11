import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Blog from "./Page/Blog"; // Import the Blog component
import Info from "./Page/Info";
import Chatbot from "./Page/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/blog/:postId" element={<Blog />} />
          <Route path="/" element={<Chatbot />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
