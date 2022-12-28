import React, { useState, useCallback } from "react";
import { useGoogleReCaptcha, GoogleReCaptcha } from "react-google-recaptcha-v3";

const CartCustomerForm = ({ sendOrder, loading, setLoading }) => {
  const [token, setToken] = useState(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const clickHandler = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }
    const result = await executeRecaptcha("order-form");
    setToken(result);
  }, [executeRecaptcha]);

  const handleReCaptchaVerify = useCallback(
    (token) => {
      setToken(token);
    },
    [setToken]
  );

  const submit = async (e) => {
    e.preventDefault();
    setLoading(1);
    //method in cart page where we call api/sendOrder.js
    //attributes forwarded: name / email / description

    if (token) {
      sendOrder(
        e.target[0].value,
        e.target[1].value,
        e.target[2].value,
        e.target[3].value,
        e.target[4].value,
        e.target[5].value,
        e.target[6].value
      );
    }

    setLoading(0);
  };

  return (
    <div id="contactform" className="container-fluid ">
      <style jsx>
        {`
          h2 {
            font-size: 20px;
            font-weight: 500 !important;
            text-align: center;
            //margin-bottom: 1.75em;
            //margin-top: 1em;
            color: #333;
          }
        `}
      </style>

      <br />
      <h2>Bezorggegevens:</h2>
      <br />
      <div className="row no-gutters">
        <div className="col-sm-0  col-lg-2 "></div>
        <div className="col-sm-12 col-lg-8">
          <form className="board-form" onSubmit={(e) => submit(e)}>
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
                  placeholder="Adres"
                  required={true}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postcode"
                  required={true}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Woonplaats"
                  required={true}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefoon"
                  required={false}
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
                  placeholder="Extra info"
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-dark btn-block"
                  onClick={clickHandler}
                >
                  <span lang="NL">
                    {loading ? "Bestelling wordt verzonden..." : "Verzenden"}
                  </span>
                </button>
              </div>
            </div>
            <GoogleReCaptcha onVerify={handleReCaptchaVerify} />
          </form>
        </div>
        <div className="col-sm-0  col-lg-2 "></div>
      </div>
    </div>
  );
};
export default CartCustomerForm;
