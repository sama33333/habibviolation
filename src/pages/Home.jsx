import React from 'react';
import { Link } from 'react-router-dom';
import test from '../assets/mainlogo.png';
import HeaderBanner from '../components/HeaderBanner';

const Home = () => {
  return (
    <>
      <div
        className="container-fluid border-0 p-0 header-logo-container"
        style={{ background: "#F5F6F6" }}
      >
        <div
          className="container border-0 py-1 p-1 d-flex align-items-center justify-content-center"
          style={{ paddingBottom: 0 }}
        >
          <img
            src="https://scontent.fisb1-2.fna.fbcdn.net/v/t39.8562-6/278025437_369851991690397_7980697822423283727_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=28b1f4&_nc_ohc=XrQEZdGuXvkQ7kNvgE7Xona&_nc_oc=AdjiBjLlWphZGqg69-O1-wXJCV2YMfgLnDtHbBGAZqFWqTsNMSc5-o6ZsHKXXMV0PlXQu6fz73ExssTjhzD2C0et&_nc_zt=14&_nc_ht=scontent.fisb1-2.fna&_nc_gid=Ak_TTVAEJdwAutWhGp31iUk&oh=00_AYDYtuf9tGspgNmMcESl15-WYifByiI8CbqLN7RmBTziQQ&oe=67B89D94"
            alt="logo"
            className="meta-logo"
          />
        </div>
      </div>

      <HeaderBanner />

      <div
        className="container d-flex justify-content-between align-items-start mt-2"
        style={{ minHeight: "60vh" }}
      >
        {/* Text column: aur zyada left aur neeche shift kiya hai */}
        <div className="col-md-5 col-lg-6" style={{ marginLeft: "-2rem", marginTop: "5rem" }}>
          <h1 className="fs-1" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Account Notice & Issue Resolution
          </h1>

          <p className="mt-4" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            Our system has identified some unusual activity on your account. This notice is provided to inform you
            about certain discrepancies that may require your attention. We continuously strive to maintain a secure
            and supportive environment for all users.
          </p>

          <p className="mt-2" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            If you believe your account is in good standing and this notice has been issued in error, please click the
            "Resolve Issue" button below to share additional details.
          </p>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "50px",
              padding: "10px 30px",
              fontSize: "1rem",
              fontWeight: "bold"
            }}
          >
            Resolve Issue
          </Link>

          <p className="py-3" style={{ fontSize: "1rem", marginTop: "1.5rem" }}>
            If you believe there is no issue with your account, please contact our Support team for further assistance.
          </p>

          <p className="mt-4 mb-0" style={{ fontSize: "1rem" }}>
            <span className="fw-semibold">Business Account?</span> For more details, please refer to:
          </p>
          <Link
            to="/validation"
            style={{ fontSize: "1rem", textDecoration: "underline" }}
          >
            Policy Guidelines and Clarifications
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "0.875rem", color: "#6c757d" }}>
            Note: The resolution process is subject to further verification and review.
          </p>
        </div>

        <div
          className="col-md-7 col-lg-6 d-none d-md-block img-smal order-2 img-fluid"
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
            width: "80%",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;