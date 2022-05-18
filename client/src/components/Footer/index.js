import React from "react";
// import { useUser } from "../../utils/UserContext";
import LinkedIn from "../../assets/linkedinpsfix.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* footer card for all members */}
        <div className="footer-card">
          <p>Joe Pa</p>
          <img className="w-xsm" src={LinkedIn} />
        </div>
      </footer>
    </div>
  );
}
