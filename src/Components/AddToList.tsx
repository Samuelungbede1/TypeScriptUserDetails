import React, { useState } from "react"



interface Iprops {
    people : {
      firstName : string
      lastName : string
      age : number
      occupation : string
      homeAddress : string
      officeAdress : string
    }[]
    }


    interface props{
        people : Iprops["people"]
        setPeople : React.Dispatch<React.SetStateAction<{
            firstName: string;
            lastName: string;
            age: number;
            occupation: string;
            homeAddress: string;
            officeAdress: string;
        }[]>>
    }


const AddTolist : React.FC<props> = ({people, setPeople}) =>{

    const [input, setInput] = useState({
   
        firstName : "",
        lastName : "",
        age : "",
        occupation : "",
        homeAddress : "",
        officeAdress : ""
      })


      const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void=>{
          setInput({
              ...input,
              [e.target.name]: e.target.value
          })

      }

      const handleClick =(): void=> {
          if(
              !input.firstName ||
              !input.lastName||
              input.age ||
              input.occupation||
              input.homeAddress||
              input.officeAdress
          ){
              return
          }

          setPeople([
              ...people,{
                  firstName : input.firstName,
                  lastName : input.lastName,
                  age : parseInt (input.age),
                  occupation : input.occupation,
                  homeAddress : input.homeAddress,
                  officeAdress :input.officeAdress

          }])

      }

    return (
        <div className= "AddToList">
            <input 
            type = "text"
            placeholder= "first Name"
            className = "AddToList-input"
            value ={input.firstName}
            onChange = {handleChange}
            name = "firstName"
            />
            <input 
            type = "text"
            placeholder= "last Name"
            className = "AddToList-input"
            value ={input.lastName}
            onChange = {handleChange}
            name = "lastName"

            />
            <input 
            type = "text"
            placeholder= "age"
            className = "AddToList-input"
            value ={input.age}
            onChange = {handleChange}
            name = "age"

            />
             <input 
            type = "text"
            placeholder= "occupation"
            className = "AddToList-input"
            value ={input.occupation}
            onChange = {handleChange}
            name = "occupation"

            />
               <input 
            type = "text"
            placeholder= "home address"
            className = "AddToList-input"
            value ={input.homeAddress}
            onChange = {handleChange}
            name = "homeAddress"

            />
               <input 
            type = "text"
            placeholder= "office address"
            className = "AddToList-input"
            value ={input.officeAdress}
            onChange = {handleChange}
            name = "officeAdress"
            />

            <button 
                className= "AddToList-btn"
                onClick = {handleClick}>
                Add Button
            </button>
        </div>
    )
}


export default AddTolist