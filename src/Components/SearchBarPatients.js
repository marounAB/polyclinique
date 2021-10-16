import React, { Component } from 'react';
import { useState } from 'react';

function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");
    const patients= [{firstname:"Marc",lastname:"Helou"},
     {firstname:"Lea", lastname:"Khoury"},
     {firstname:"Lea", lastname:"Khoury"},
     {firstname:"Lea", lastname:"Khoury"},
     {firstname:"Lea", lastname:"Khoury"},
     {firstname:"Lea", lastname:"Khoury"},
     {firstname:"Lea", lastname:"Khoury"},
     {firstname:"Lea", lastname:"Khoury"}
     ]

     ;
    return(
        <div className="container">
            <input type="text" Style="width: 300px;"
            placeholder="Search for patient"
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }}
            />
            <div className="result" Style="height: 70px; width: 400px; overflow:hidden; overflow-y:auto; padding-top:20px;">
            {patients.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.firstname.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val,key) => {
                return (
                    <div className="patient" key={key}>
                        <p>{val.firstname} {val.lastname}</p>
                    </div>
                );
            })}
            </div>


        </div>

    )
}

export default SearchBar;