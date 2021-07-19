import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Page/HomePage/HomePage";
import AboutPage from "./Page/AboutPage/AboutPage";
import TrainerPage from "./Page/TrainerPage/TrainerPage";
import './Global.css'
import ServicePage from "./Page/ServicePage/ServicePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import RegisterPage from "./Page/RegisterPage/RegisterPage";
import InformationServiceToRegisterProgramPage from "./Page/InformationServiceToRegisterProgramPage/InformationServiceToRegisterProgramPage";
import ExpenseSummaryPage from "./Page/ExpenseSummaryPage/ExpenseSummaryPage";
import PaymentPage from "./Page/PaymentPage/PaymentPage";
import PaymentSuccessPage from "./Page/PaymentSuccessPage/PaymentSuccessPage";
import UserInprogressProgramPage from "./Page/UserInprogressProgramPage/UserInprogressProgramPage";
import UserProfilePage from "./Page/UserProfilePage/UserProfilePage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutpage' component={AboutPage} />
          <Route path='/trainerpage' component={TrainerPage}/>
          <Route path='/servicepage' component={ServicePage} />
          <Route path='/loginpage' component={LoginPage} />
          <Route path='/registerpage' component={RegisterPage} />
          <Route path='/informatioservicetoregisterprogrampage' component={InformationServiceToRegisterProgramPage} />
          <Route path='/expensesummarypage' component={ExpenseSummaryPage} />
          <Route path='/paymentpage' component={PaymentPage} />
          <Route path='/paymentsuccesspage' component={PaymentSuccessPage} />
          <Route path='/inprogressprogrampage' component={UserInprogressProgramPage} />
          <Route path='/user-profile-page' component={UserProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
