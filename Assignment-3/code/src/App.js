import React from 'react';
import './App.css';


var arrowL="<"
var arrowR=">"


function App(props) {
  
  return (
    <div className="site-container">
      <div className='heading'>
        <span ><h3>{arrowL}</h3></span>
        <div className='employee'>
        <p><b >{props.Ename}</b></p>
        <p>{props.Id}</p>
        </div>
        <button>Print</button>
      </div>
      <div className='customer-info'>
        <p>Appointment On:<b>{props.aptime}</b></p>
        <p>Email:<b>{props.email}</b></p>
        <p>Phone:<b>{props.phoneNum}</b></p>
      </div>
      <div className='order-info'>
        <div><p><b>Status:</b></p><li>{props.status}</li></div>
        <div><p><b>Door:</b></p><p>{props.doorNum}</p></div>
        <div><p><b>Time:</b></p><p>{props.time}</p></div>
      </div>
      <div className='product-list'>
        <div className='checkBox' ></div>
        <img src={props.imgsrc} alt="Pic" />
        <div className='personData'>
        <b>Name:{props.personName}</b>
        <p>This personis the one who is suffering from this and this</p>
        </div>
        <h4><b>{arrowR}</b></h4>
      </div>
    </div>
  );
}

export default App;
