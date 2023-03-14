import React, { useState } from "react";
import { close, open } from "../../../home/image";
import "../style.css";

const FaqsCard = ({ title, content }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="cardfaq">
      <div className="headercard">
        <button className="btn" onClick={() => setShow(!show)} >
          {show ? (
            <img src={close} alt="close" />
          ) : (
            <img src={open} alt="open" />
          )}
        </button>
        <p className="text_center" >{title}</p>
      </div>
      {show ? (
        <div className="bodycard">
          <p>{content}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FaqsCard;
