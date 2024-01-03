import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useGuideContext } from "../Context/GuideContext";
import { useAuthContext } from "../Context/AuthContext";

export const DeleteGuideModal = ({ title, guideId }) => {
  const [show, setShow] = useState(false);
  const { deleteGuide } = useGuideContext();
  const { authToken } = useAuthContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      if (authToken) {
        await fetch(`http://localhost:8080/guides/${guideId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          method: "DELETE",
        });
        deleteGuide(guideId);
        handleClose();
      }
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
