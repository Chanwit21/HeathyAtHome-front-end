import React from "react";
import "./UserConsultTrainerComponent.css";
import TrainerCardMiniSizeComponent from "../TrainerCardMiniSizeComponent/TrainerCardMiniSizeComponent";

function ConsultTrainerComponent(props) {
  return (
    <div className="consult-trainer-component">
      <div className="text-to-consult-box">
        <div className="text-in-text-to-consult-box">
          <h1>
            Your Personal <span>Trainer</span>
          </h1>
          <p>You can consult him whenever you want.</p>
        </div>
      </div>
      <img src="../PIC/Icon/share.png" alt="share" />
      <TrainerCardMiniSizeComponent
        pathOfImg={props.pathOfImg}
        nickName={props.nickName}
        Fullname={props.Fullname}
      />
    </div>
  );
}

export default ConsultTrainerComponent;
