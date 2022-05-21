import React from "react";
// import { useUser } from "../../utils/UserContext";

export default function Footer() {
  return (
    <div>
      <footer className="df footer">
        {/* footer card for all members */}
        <div className="footer-card lg">
          <h6>Joe Palmisano</h6>
          <a href="https://www.linkedin.com/in/joseph-palmisano-jnp/" className="" target="_blank">
            <i className="fa fa-linkedin px-1" />
          </a>
          <a href="https://github.com/joepamedia" target="_blank">
            <i className="fa fa-github px-1" />
          </a>
        </div>
        <div className="footer-card lg">
          <h6>Aidan Chamberlain</h6>
          <a
            href="https://www.linkedin.com/in/aidan-chamberlain-776b8b90/"
            className=""
            target="_blank"
          >
            <i className="fa fa-linkedin px-1" />
          </a>
          <a href="https://github.com/RedComet6" target="_blank">
            <i className="fa fa-github px-1" />
          </a>
        </div>
        {/* brett */}
        <div className="footer-card lg">
          <h6>Brett Gould</h6>
          <a href="https://www.linkedin.com/in/brettdgould//" className="" target="_blank">
            <i className="fa fa-linkedin px-1" />
          </a>
          <a href="https://github.com/bgould86" target="_blank">
            <i className="fa fa-github px-1" />
          </a>
        </div>
        <div className="footer-card lg">
          <h6>Maya Tillman</h6>
          <a
            href="https://www.linkedin.com/in/maya-tillman-430084227/"
            className=""
            target="_blank"
          >
            <i className="fa fa-linkedin px-1" />
          </a>
          <a href="https://github.com/mayaatil" target="_blank">
            <i className="fa fa-github px-1" />
          </a>
        </div>
        <div className="footer-card lg">
          <h6>Thomas Frohm</h6>
          <a href="https://www.linkedin.com/in/thomas-f-767203232/" target="_blank">
            <i className="fa fa-linkedin px-1" />
          </a>
          <a href="https://github.com/tfrohm11" target="_blank">
            <i className="fa fa-github px-1" />
          </a>
        </div>
        <div className="footer-card sm">
          <h6>Its The S</h6>
          <a href="https://github.com/Its-The-S/gamerzstatz" target="_blank">
            <i className="fa fa-github px-1" />
          </a>
        </div>
      </footer>
    </div>
  );
}
