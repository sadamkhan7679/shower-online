import React from "react";
import ContactForm from "../components/ContactForm";

class Contact extends React.Component {
  render() {
    return (
      <div id="contactform" className="container  contact-form">
        <style jsx>{`
          @media screen and (max-width: 600px) {
            .contactTextLeft {
              //max-width: 60%;
              text-align: center;
            }
          }
          @media screen and (min-width: 601px) {
            .contactTextLeft {
              width: 50%;
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}</style>

        <div className="row">
          <div className="col-md-6  ">
            <div className="mt-3  contactTextLeft">
              <br />
              <p> Contact België</p>
              Smid Lambrechtstraat 72
              <br />
              9406 Ninove, België
              <br />
              <i className="fas fa-phone" />: +32(0) 496 50 45 05
              <br />
              <i className="fa fa-envelope pr-2" />:{" "}
              <a href="mailto:cedrik@eauplus.be"> cedrik@eauplus.be</a>
              <br />
              Beschikbaar: Enkel op afspraak
              <br />
              <br />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="w-75">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
