import React from "react";

const H1Header = ({ title }) => (
  <div>
    <style jsx>{`
      .heading-1 {
        position: relative;
        text-align: center;
        padding-top: 25px;
        padding-bottom: 25px;
      }

      @media screen and (max-width: 600px) {
        .title {
          font-size: 28px;
          font-weight: 700;
          line-height: 64px;
        }
      }

      @media screen and (min-width: 601px) {
        .title {
          font-size: 36px;
          font-weight: 700;
          line-height: 64px;
        }
        .heading-1:before {
          content: "";
          display: block;
          border-top: solid 2px #bebebe;
          width: 100%;
          height: 2px;
          position: absolute;
          top: 50%;
          z-index: 0;
        }
        .heading-1 span {
          background: #fff;
          padding: 0 10px;
          position: relative;
          z-index: 1;
        }
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media screen and (min-width: 768px) {
        .title {
          font-size: 36px;
          font-weight: 700;
          line-height: 64px;
        }
      }
    `}</style>
    <h1 className="heading-1 title">
      <span>{title}</span>
    </h1>
  </div>
);
export default H1Header;
