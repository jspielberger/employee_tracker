import React, { useState, useEffect } from "react";
import API from "../utils/API";


export default function () {
    //hook, set state to empty array because of the data type in this case...
    //if it was an object, initial state would be as well...
    const [employees, setEmployee] = useState([]);
    const [filteremployees, setFilter] = useState([]);

    useEffect(()=>{
    API().then(res=> {
    setEmployee(res.data.results);
    setFilter(res.data.results);
    console.log(res.data.results)
    })
    },[])
    ;

    const handleChange = val => {
        console.log(val)
        let empFilter = employees.filter(a=> a.name.first.toLowerCase().includes(val))
        setFilter(empFilter);
    }
    
    return (
            <div className="container">
                <input onChange={(e)=>{handleChange(e.target.value)}}/>
                <div className="col-10">
                    {filteremployees.map(emp=>
                    <div className="row">Name: {emp.name.title}: {emp.name.first} {emp.name.last} Email: {emp.email}</div>
                    )
                    }
                
                </div>
            </div>
    )
}