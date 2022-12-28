import React from "react";
import Link from "next/link";

const Assortment = ({ title, subtext, imageUrl }) => (
  <div>
    <style jsx>{`
      .assortmentBtn {
        position: absolute;
        left: 0;
        bottom: 10px;
        right: 0;
        margin: auto;
      }

      .assortmentTitle {
        position: absolute;
        top: 60px;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        color: white;
      }

      .assortmentTitleFont {
        font-weight: bold;
        font-size: 30px;
      }

      .assortmentSubFont {
        //font-weight: bold;
        font-size: 18px;
      }

      .imgContainer {
        position: relative;
        margin: auto;
        overflow: hidden;
        width: 340px;
        max-height: 340px;
        text-align: center;
      }

      .imgContainer img {
        max-width: 100%;
        transition: all 0.3s;
        display: block;
        width: 100%;
        height: auto;
        transform: scale(1);
      }

      .imgContainer:hover img {
        transform: scale(1.1);
      }
    `}</style>

    <div className="card border-0 pb-5 ">
      <div className="box-part ">
        <div className="text-center imgContainer ">
          <div></div>
          <img
            src={imageUrl}
            className="img img-fluid memberIcon "
            alt={title}
          />
          <div className="assortmentTitle">
            <div className="assortmentTitleFont">{title}</div>
            <div className="assortmentSubFont">{subtext} </div>
          </div>
          <div className="assortmentBtn">
            <Link href="products">
              <button type="button" className="btn btn-dark ">
                Shop nu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Assortment;
