import React from "react";

const FaqDetail = ({ id, datatarget, title, text, urlimage1, urlimage2 }) => (
  <div id="">
    <style jsx>{`
      .card-header .title {
        font-size: 17px;
        color: #000;
      }
      .card-header:hover {
        color: blue;
      }
      .card-header .title:hover {
        color: blue;
      }
      .card-header .accicon {
        float: right;
        font-size: 20px;
        width: 1.2em;
      }
      .card-header {
        cursor: pointer;
        border-bottom: none;
      }
      .card {
        border: 1px solid #ddd;
      }
      .card-body {
        border-top: 1px solid #ddd;
      }
      .card-header:not(.collapsed) .rotate-icon {
        transform: rotate(180deg);
      }
    `}</style>

    <div className="card">
      <div
        className="card-header collapsed"
        data-toggle="collapse"
        data-target={datatarget}
        aria-expanded="false"
      >
        <span className="title">{title}</span>
        <span className="accicon ">
          <i className="fas fa-angle-down rotate-icon"></i>
        </span>
      </div>
      {/*add class show if you want to default open one*/}
      <div id={id} className="collapse " data-parent="#accordionFaq">
        <div className="card-body">
          {/* 
          <div className="row my-4">
            <div className="col-12">
              <img src={urlimage1} alt="alt text" className="img-fluid" />
            </div>
          </div>
          */}

          <div> {text}</div>
          <div>
            <img src={urlimage1} alt="alt text" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FaqDetail;
