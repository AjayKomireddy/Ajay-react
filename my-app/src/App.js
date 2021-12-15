import logo from './logo.svg';
import './App.css';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}  
function App() {
  return (
    
    <div>
      <div className="Main">
        <img alt="" src ={employee.profileImg} className="image"/>
        <h1 className="Name">{employee.name}</h1>
        <p class="key">Location</p>
        <p class="Value"><b>{employee.location}</b></p>
        <br></br>
        <p class="key">Blood Group</p>
        <p class="Value"><b>{employee.bloodGroup}</b></p>
        <br></br>
        <p class="key">Age</p>
        <p class="Value"><b>{employee.age}</b></p>
        
 
      </div>
    </div>
    
    
  );
}

export default App;
