import React from "react";
import "./style.css";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalComponent = ({ closeModal, imageUrl, text, textLink, linkUrl }) => {
  return (
    <div className="container_modal">
      <div className="modal">
        <button className="close_modal_button" onClick={closeModal}>
          <AiFillCloseCircle />
        </button>
        <img className="img_modal" src={imageUrl} alt="" />
        <p>{text}</p>
        <a className="navigate_to_employeeList" href={linkUrl}>
          {textLink}
        </a>
      </div>
    </div>
  );
};

export default ModalComponent;
