import React from "react";
import "./MenuBarComponent.css";
import { Link } from "react-router-dom";

function MenuBarComponent(props) {
  return (
    <div className="menu-bar-component">
      <div className="content-box">
        <Link
          to="/user-workout-schedule-page"
          className={props.Page === "UserWorkoutSchedulePage" ? "onPage" : ""}
        >
          <h1
            style={{
              borderRadius: "0.52083vw 0.52083vw 0 0",
              color:props.Page === "UserWorkoutSchedulePage" ? "#000000FF" : ""
            }}
          >
            Workout
          </h1>
        </Link>
        <Link
          to="/user-food-schedule-page"
          className={props.Page === "UserFoodSchedulePage" ? "onPage" : ""}
          style={{ color:props.Page === "UserFoodSchedulePage" ? "#000000FF" : "" }}
        >
          <h1>Food</h1>
        </Link>
        <Link to="/user-weekly-update-schedule-page">
          <h1
            className={props.Page === "UserWeeklyUpdatePage" ? "onPage" : ""}
            style={{ borderRadius: "0 0 0.52083vw 0.52083vw",
            color:props.Page === "UserWeeklyUpdatePage" ? "#000000FF" : "" }}
          >
            Weekly Update
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default MenuBarComponent;
