import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import AddTolist from './Components/AddToList';


interface IDetails {
  firstName : string
  lastName : string
  age : string
  occupation : string
}

interface IAddress {
  homeAddress : string;
  officeAdress : string; 
}

export interface IUserData extends IDetails, IAddress{
  people : {
    firstName : string
    lastName : string
    age : number
    occupation : string
    homeAddress : string
    officeAdress : string
  }[]
}



function App() {

  const [people, setPeople] = useState<IUserData["people"]>([{
   
    firstName : "Onum",
    lastName : "Ungbede",
    age : 47,
    occupation : "Senior-Dev",
    homeAddress : "Edo-Tech",
    officeAdress : "Okhuromi"

  }])

  return (
    <div className="App">
     <h2>Personal Information</h2>
     <List people = {people}/>
     <AddTolist people= {people} setPeople= {setPeople}/>
    </div>
  );
}

export default App;
