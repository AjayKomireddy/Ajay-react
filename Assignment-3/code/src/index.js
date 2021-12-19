import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
let personDetails={
  name:"Raj",
  employeeId:"A10235",
  appointmentTime:"9:00(18-11-2021)",
  email:'name@gmail.com',
  phone:"+1569856",
  status:"inProgress",
  Door:"Mark",
  time:"10:00(18-12-2021)",
  personName:"AK",
  profileImg:'https://www.w3schools.com/howto/img_avatar.png'
}
ReactDOM.render(
  <React.StrictMode>
    <App 
    Ename={personDetails.name}
    Id={personDetails.employeeId}
    aptime={personDetails.appointmentTime}
    email={personDetails.email}
    phoneNum={personDetails.phone}
    status={personDetails.status}
    doorNum={personDetails.Door}
    time={personDetails.time}
    imgsrc={personDetails.profileImg}
    personName={personDetails.personName}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
