import React, { useState, useEffect } from "react";
import API from "../utils/API";


export default function () {
    //hook, set state to empty array because of the data type in this case...
    //if it was an object, initial state would be as well...
    const [employees, setEmployee] = useState([]);

    useEffect(()=>{
    API().then(res=> {
    setEmployee(res.data.results);
    console.log(res.data.results)
    })
    },[])
    ;
    
    return (
            <div className="container">
                <div className="col-10">
                    {employees.map(emp=> <div>{emp.name.first}</div>)}
                
                </div>
            </div>
    )
}