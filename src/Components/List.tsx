import { prependOnceListener } from "process"
import React from "react"

//import { IUserData as Iprops } from "../App"

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

const List: React.FC<Iprops> = ({people}) => {


    const renderList = () : JSX.Element[] => {
        return people.map((person)=>{

        
        return (
                <li className = "List">
                 <div className = "List-header">
                 <p className = "List-header"></p>
                     <p> {person.firstName}</p>
                 </div>
                 <p>{person.lastName}</p>
                 <p>{person.age}</p>
                 <p>{person.homeAddress}</p>
                 <p>{person.occupation}</p>
                 <p className= "List-note">{person.officeAdress}</p>
            </li>
        )
        })

    }

    return(
    <ul>
     {renderList()}
    </ul>
    )
}

export default List