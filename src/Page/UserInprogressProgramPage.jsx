import React from "react";
import ContactUsComponent from "../Component/ContactUsComponent";
import FooterComponent from "../Component/FooterComponent";
import NavBarLeftForUserComponent from "../Component/NavBarLeftForUserComponent";
import NavComponent from "../Component/NavComponent";
import UserInprogressProgramCardComponent from "../Component/UserInprogressProgramCardComponent";
import "./UserInprogressProgramPage.css";
import { Link } from "react-router-dom";
import UserConsultTrainerComponent from "../Component/UserConsultTrainerComponent";

function UserInprogressProgramPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="inprogress-program-page">
        <section className="content-in-inprogress-program-page">
          <div className="container">
            <div className="inprogress-program">
              <div className="nav-left-user">
                <NavBarLeftForUserComponent
                  Name="Wuttichai Chankracang"
                  Page="UserInprogressProgramPage"
                />
              </div>
              <div className="inprogress-course-enrolled-and-consult-trainer">
                <UserInprogressProgramCardComponent
                  ProgramName="90 Days Program"
                  ContentInProgram="Suitable for people who want to change their shape in a short time."
                />
                <div className="consult-trainner">
                  <Link to="/chat-page">
                    <UserConsultTrainerComponent
                      pathOfImg="../PIC/Trainer/pexels-thisisengineering-3912944.jpg"
                      nickName="Trainer Job"
                      Fullname="Thanapob SingHaseanee"
                    />
                  </Link>
                </div>
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

export default UserInprogressProgramPage;
