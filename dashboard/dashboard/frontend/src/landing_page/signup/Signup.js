import React from 'react';

function Signup() {
    return ( 
      
    <>
      <style>{`
         {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #424242;
        }

        .navbar {
          height: 70px;
          border-bottom: 1px solid #eee;
        }

        .logo {
          width: 130px;
        }

        .nav-link {
          color: #424242 !important;
          text-decoration: none;
          font-size: 16px;
        }

        .menu {
          border: none;
          background: none;
          padding: 5px;
        }

        .menu span {
          display: block;
          width: 25px;
          height: 2px;
          background: #424242;
          margin: 5px 0;
        }

        .signup-container {
          min-height: calc(100vh - 70px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .signup-box {
          width: 450px;
        }

        .signup-box h1 {
          font-size: 32px;
          font-weight: 500;
          color: #222;
          margin-bottom: 15px;
        }

        .subtitle {
          color: #777;
          font-size: 18px;
          margin-bottom: 30px;
        }

        .mobile-input {
          height: 60px;
          display: flex;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        .country {
          width: 150px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
          border-right: 1px solid #ccc;
          font-size: 18px;
        }

        .mobile-input input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 15px;
          font-size: 16px;
        }

        .otp-btn {
          width: 100%;
          height: 55px;
          margin-top: 30px;
          border: none;
          border-radius: 4px;
          background: #387ed1;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }

        .otp-btn:hover {
          background: #2868b2;
        }

        .terms,
        .nri {
          color: #777;
          font-size: 14px;
          margin-top: 30px;
        }

        a {
          color: #387ed1;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .nav-link {
            display: none;
          }

          .signup-container {
            padding: 30px 20px;
            align-items: flex-start;
          }

          .signup-box {
            width: 100%;
          }
        }
      `}</style>

     

      {/* Signup */}
      <div className="signup-container">
        <div className="signup-box">

          <h1>Signup now</h1>

          <p className="subtitle">
            Or track your existing application
          </p>

          <div className="mobile-input">
            <div className="country">
              <span>🇮🇳</span>
              <span>+91</span>
            </div>

            <input
              type="text"
              placeholder="Enter your mobile number"
            />
          </div>

          <button className="otp-btn">
            Get OTP
          </button>

          <p className="terms">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#">terms</a> &{" "}
            <a href="#">privacy policy</a>
          </p>

          <p className="nri">
            Looking to open NRI account?{" "}
            <a href="#">Click here</a>
          </p>

        </div>
      </div>
    </>
  );
}

export default Signup;



    