import React, { useRef, useEffect } from "react";
import "./popup.css";
import Close from "../../assets/times.svg";

const Popup = ({ children, overlay, action }) => {
  const myref = useRef();
  useEffect(() => {
    myref.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [overlay]);
  return (
    <div className={overlay ? "popup-container" : "no-show"}>
      <div className="popup-cont" ref={myref}>
        <div className="popup-wrapper">
          <div className="popup-header">
            <img src={Close} alt="close" onClick={action} />
          </div>
          <div className="popup-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
