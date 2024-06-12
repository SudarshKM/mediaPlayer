import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Button from 'react-bootstrap/Button';
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";

function VideoCard() {
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "100%" }} className="mt-4">
        <Card.Img
          onClick={handleShow}
          variant="top"
          src="https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg"
          width={"100%"}
          height={"350px"}
        />
        <Card.Body>
          <Card.Text>Movie Title</Card.Text>
          <button className="btn btn-danger">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/HkvVaj_28C8?si=5Q0hUOD0dubekwxy?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
