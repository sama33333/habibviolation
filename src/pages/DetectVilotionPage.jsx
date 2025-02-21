import React from "react";
import { Link } from "react-router-dom";

const DetectViolationPage = () => {
  const navLinks = [
    "Transparency Center",
    "Policies",
    "Enforcement",
    "Security",
    "Features",
    "Oversight",
    "Reports",
  ];

  // const specificYear = moment().year(2023);

  return (
    <>
      <div className="container-fluid border-0 p-0">
        <div className="container border-0 py-3 p-2">
          <img
            src="https://scontent.fisb3-4.fna.fbcdn.net/v/t39.2365-6/278095046_1967528346752748_7467599174931884085_n.svg?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_eui2=AeGBBschzolOYEFZ7qn9lVP8O9IaezjgoPQ70hp7OOCg9HVuQke5YNRi9cvbRQw_doaf0fAL1QJullpR7-NvXGBH&_nc_ohc=xDi7ax7LPTMAX-C6LQ2&_nc_pt=1&_nc_ht=scontent.fisb3-4.fna&oh=00_AfCVyXy_CUaLJtBlvOP0PwGelxzMnG7NYgcSJxQvrH0l3Q&oe=659CF215"
            alt="logo"
          />
        </div>
      </div>

      <div className="container-fluid" style={{ background: "#F5F6F6" }}>
        <div className="container py-3">
          <ul
            className="d-md-flex text-secondary px-0 py-1 m-0"
            style={{ fontFamily: "Poppins", fontSize: "13px" }}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                style={{ listStyle: "none", cursor: "pointer" }}
                className={` ${index === 0 ? "ms-0 fs-5" : "ms-5 fs-6"} py-2`}
                onClick={() => (window.location.href = "/")}
              >
                {" "}
                {link}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ background: "#19646e", fontFamily: "Poppins" }}
      >
        <div className="container py-5 text-white">
          <div className="d-flex my-4 mb-4" style={{ fontSize: "13px" }}>
            <p className="m-0 p-0">Home</p>
            <span className="mx-3"> {"-> "}</span>
            <p>How meta enforces it's policies</p>
          </div>
          <h1 className="mb-4" style={{ fontSize: "48px" }}>
            Detecting violations
          </h1>
          <p className="mb-5" style={{ maxWidth: "460px", fontSize: "13px" }}>
            Technology and review teams help Meta detect and review potentially
            violating content and accounts on Facebook and Instagram.
          </p>
          <Link
            to="/validation"
            className="border-0 text-decoration-none"
            style={{
              background: "white",
              color: "#19646e",
              borderRadius: "100px",
              padding: "6px 25px",
            }}
          >
            Resolve Now
          </Link>
        </div>
      </div>

      <div className="container-fluid" style={{ background: "#F5F6F6" }}>
        <h5
          className="py-4 text-center"
          style={{ fontSize: "14px", fontFamily: "Poppins" }}
        >
          {/* Meta @ {specificYear.format('YYYY')} */}
        </h5>
      </div>
    </>
  );
};

export default DetectViolationPage;
