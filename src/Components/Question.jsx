// import { render } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Question=()=>{
    const a=useState(1);
    for(var i=0;i<a;i++){
        
    }
    return (
        <li className="m-5">

        <div className="row">
            <label htmlFor="ta-1">Question</label>
        <textarea className=" col-lg-12 text-white bg-transparent form-control" />
        <label htmlFor="">Options:</label>
        <input className="m-5 col-lg-3 " type="text" name="" id="" />
        <input className="m-5 col-lg-3 " type="text" name="" id="" />
        <input className="m-5 col-lg-3 " type="text" name="" id="" />
        <input className="m-5 col-lg-3 " type="text" name="" id="" />
        
        {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
        </div>
        </li>
    )
}



export default Question;