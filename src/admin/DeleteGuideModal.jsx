import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// need to handle deleting page reloading, or not todo
export const DeleteGuideModal = ({ title, guideId }) => {
  console.log("DeleteGuideModal ", guideId);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    console.log("handleDelete ", guideId);
    try {
      await fetch(`http://localhost:8080/guides/${guideId}`, {
        method: "DELETE",
      });
      handleShow();
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this guide and all of its content?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleDelete(guideId)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
