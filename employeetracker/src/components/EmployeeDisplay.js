import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "../../src/EmployeeDisplay.css"


export default function () {
    //hook, set state to empty array because of the data type in this case...
    //if it was an object, initial state would be as well...
    const [employees, setEmployee] = useState([]);
    const [filteremployees, setFilter] = useState([]);

    useEffect(() => {
        API().then(res => {
            setEmployee(res.data.results);
            setFilter(res.data.results);
            console.log(res.data.results)
        })
    }, [])
        ;

    const handleChange = val => {
        console.log(val)
        let empFilter = employees.filter(a => a.name.first.toLowerCase().includes(val) ||
            a.name.last.toLowerCase().includes(val) ||
            a.email.includes(val) || a.phone.includes(val) || a.cell.includes(val))
        setFilter(empFilter);
    }

    return (
        <div className="container">
            <header>
                <h2>Employee Directory and Search Engine</h2>
            </header>
            <div className="row form-group">
                <label htmlFor="search">Search:</label>
                <input onChange={(e) => { handleChange(e.target.value.toLowerCase()) }} placeholder="Search for an Employee" />
            </div>

            <div className="row">
                <div className="col-12">
                    {filteremployees.map(emp =>
                        <p className="row employee">Name: {emp.name.title}: {emp.name.first} {emp.name.last} <br></br> Email: {emp.email} <br></br> Phone: {emp.phone} </p>
                    )
                    }

                </div>


            </div>
        </div>
    )
}