import React from "react";

import "./Menu.css";

function Contact() {
  return (
    <section id="contact">
      <div className="inner">
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon solid alt fa-envelope"></span>
              <h3>Email</h3>
              <span>zanecreid@hotmail.com</span>
              <br />
              <br />
              <h3>Resume</h3>
              <a
                href="https://docs.google.com/document/d/19zXvuSGdXFCYnu1Gu99Zd9va2qBdpP3h7jVwmaRgVsA/edit?usp=sharing"
                className="link"
              >
                <span>Click Here</span>
              </a>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
export default Contact;
