import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const VideoButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const videoSource =
    "https://www.youtube.com/embed/7MWhe660DEk?si=FPR5fuhPF0N-d-K9";

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    openModal();
  };

  return (
    <>
      <div className="background-container">
        {/* Full-width background image */}
        <div
          className="background-image"
          onClick={handleImageClick} // Trigger the modal when the image is clicked
        >
          {/* Circular play button icon */}
          <Button
            className="play-button" // Apply custom class for styling
            onClick={openModal} // Trigger the modal when the button is clicked
          >
            <span className="play-icon">&#9654;</span>
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} size="xl">
        {" "}
        {/* Use size "xl" to make the modal larger */}
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Embed video based on the video source */}
          <iframe
            title="Video"
            width="100%"
            height="500" // You can adjust the height as needed
            src={videoSource + "?autoplay=1"}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoButton;
