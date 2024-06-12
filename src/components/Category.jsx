import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import VideoCard from "./VideoCard";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <button className="btn btn-warning w-100 mt-5 mt-md-1 p-4 " onClick={handleShow}>
          Add new Category <FontAwesomeIcon className="ms-1"  icon={faPlus} />
        </button>
      </div>

      <div className="mt-md-5 mt-2">
        <div className="border border-secondary mt-2 rounded p-3 ms-4 ms-md-0">
           <div className="d-flex">
              <p>Movie Title</p>
              <button className="btn btn-danger ms-auto"><FontAwesomeIcon icon={faTrashCan} /></button>
           </div>
           <VideoCard/>
        </div>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="rounded border p-3 border-secondary">
            <input type="text" className="form-control" placeholder="Category Name"/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
