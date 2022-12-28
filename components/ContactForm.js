import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      submitted: false,
    };
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(e) {
    e.preventDefault();
    let data = {
      name: e.target[0].value,
      email: e.target[1].value,
      desc: e.target[2].value,
      from: "Shower-Online Contact Us:"
    };

    fetch(
      process.env.ENV_CONTACT_FORM_LAMBDA_URL, //lambda url api gateway 
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        res.status === 200
          ? this.setState({ submitted: true })
          : alert("failed to submit request, please email to cedrik@eauplus.be");
      })
      .catch((res) => {
        console.log(`error: ${res}`);
      });
  }

  render(msg) {
    const title = "Contact Page";
    return (
      <div id="contactform" className="container ">
        <style jsx>{``}</style>

        <div>
          <br />
          {!this.state.submitted && (
            <form className="board-form" onSubmit={this.validateForm}>
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Naam"
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email adres"
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Bericht"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button className="btn btn-dark btn-block">
                    <span lang="NL">Verzenden</span>
                  </button>
                </div>
              </div>
            </form>
          )}

          {this.state.submitted && (
            <div>
              Uw bericht werd verstuurd.
              <br /> Wij nemen zo snel mogelijk contact met u op.{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ContactForm;
