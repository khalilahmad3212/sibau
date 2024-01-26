import React, { useState } from "react";
import styles from "../../styles/about/gallery.module.css";
import Image from "next/image";
import Modal from "react-bootstrap/Modal"; // Import the modal component from react-bootstrap
import Button from "react-bootstrap/Button"; // Import the button component from react-bootstrap

const path = "http://localhost:5000/gallery";

const GalleryServerComponent = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {gallery && (
        <section className="st-1">
          <div className="container">
            <div className="row ">
              {gallery.map((image, index) => (
                <div className="col-md-4" key={index}>
                  <Image
                    onClick={() => handleImageClick(image)}
                    className="custom-image"
                    src={`${path}/${encodeURIComponent(image.Name)}`}
                    alt="image"
                    height={250}
                    width={250}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {selectedImage && (
        <Modal show={selectedImage !== null} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Image</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <img
              src={`${path}/${encodeURIComponent(selectedImage.Name)}`}
              alt="image"
              style={{
                alignItems: "center",
                alignSelf: "center",
                height: "70%",
              }}
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default GalleryServerComponent;
