import React from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Add() {
  // create a state to hold data from input

  const [video, setVideo] = useState({ caption: "", image: "", url: "" });
  console.log(video);

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const validateLink=(e)=>{
    console.log(e.target.value);
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>
          Upload<span id="hide"> New Video</span>
        </h5>
        <button className="btn mb-3" onClick={handleShow}>
          <FontAwesomeIcon icon={faUpload} size="2xl" />
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill details</p>
          <form action="" className="p-3 border border-secondary rounded">
            {/* <input type="text" className='form-control mt-3' placeholder='Video id' name="" id="" /> */}
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Video Caption"
              name=""
              id=""
              onChange={(e)=>{setVideo({...video,caption:e.target.value})}}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Video image"
              name=""
              id=""
              onChange={(e)=>setVideo({...video,image:e.target.value})}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Video url"
              name=""
              id=""
              onChange={(e)=>validateLink(e)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
