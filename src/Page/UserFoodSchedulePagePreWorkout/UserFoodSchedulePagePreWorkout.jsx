import React from "react";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import MenuBarComponent from "../../Component/MenuBarComponent/MenuBarComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import { Link } from "react-router-dom";
import "./UserFoodSchedulePagePreWorkout.css";
import ContactUsComponent from "../../Component/ContactUsComponent/ContactUsComponent";
import UserConsultTrainerComponent from "../../Component/UserConsultTrainerComponent/UserConsultTrainerComponent";

function UserFoodSchedulePagePreWorkout() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="user-food-schedule-page-pre-workout">
        <section className="food-menu-menu-bar-left-in-User-course-page">
          <div className="container">
            <div className="row-of-food-card">
              <div className="menubar">
                <MenuBarComponent
                  Page="UserFoodSchedulePage"
                  FoodMenu="UserFoodSchedulePagePreWorkout"
                />
              </div>
              <div className="food-content-card">
                <div className="content-card">
                  <h1>PRE WORKOUT MEAL</h1>
                  <p>pre-workout meal 30-90 minutes.</p>
                  <ul>
                    <li>
                      Emphasize the powder to have the strength to exercise.
                    </li>
                    <li>POST is a post-workout meal.</li>
                    <li>Focus on protein to maintain muscle.</li>
                    <li>Less fat for faster digestion.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="img-table">
            <div className="container">
                <div className="imgtable-row">
                    <img src="../../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg" alt="PRE-WORKOUT-MEAL" />
                </div>
            </div>
        </section>
        <section className="consult-trainer">
          <div className="container">
            <div className="consult-trainer-row">
              <div className="consult-trainer">
                <Link to="/chatpage">
                  <UserConsultTrainerComponent
                    pathOfImg="../PIC/Trainer/pexels-thisisengineering-3912944.jpg"
                    nickName="Trainer Job"
                    Fullname="Thanapob SingHaseanee"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <div className="horizental-line"></div>
            <ContactUsComponent />
          </div>
        </section>
      </div>
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default UserFoodSchedulePagePreWorkout;
