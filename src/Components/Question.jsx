// import { render } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Question=()=>{
    const a=useState(1);
    const [q,setQ]=useState("");
    const [tf1,setTf1]=useState("");
    const [tf2,setTf2]=useState("");
    const [tf3,setTf3]=useState("");
    const [tf4,setTf4]=useState("");
    const [ans,setAns]=useState("");
    const [obj,setObj]=useState({});
    for(var i=0;i<a;i++){
        
    }
    useEffect(()=>{
        setObj({
            q:q,
            options:[tf1,tf2,tf3,tf4],
            ans:ans.split(",")
        })
        console.log(obj);
    },[q,tf1,tf2,tf3,tf4,ans])

    function handleQuestion(e){
        setQ(e.target.value);
        
    }



    return (
        <li className="m-5">

            <label className="m-4" htmlFor="ta-1">Question</label>
        <textarea value={q} onChange={handleQuestion} className=" col-lg-12 text-white bg-transparent form-control" />
        <label htmlFor="" className="m-1">Options :</label>
        
        <div className="row">

        <input value={tf1} onChange={(e)=>setTf1(e.target.value)} className="m-5 col-lg-3 " type="text" name="" id="" />
        <input value={tf2} onChange={(e)=>setTf2(e.target.value)} className="m-5 col-lg-3 " type="text" name="" id="" />
        </div>
        <div className="row">

        <input className="m-5 col-lg-3 " value={tf3} onChange={(e)=>setTf3(e.target.value)} type="text" name="" id="" />
        <input className="m-5 col-lg-3 " value={tf4} onChange={(e)=>setTf4(e.target.value)} type="text" name="" id="" />
        </div>
<div className="row">

<label htmlFor="" className="col-lg-3">Correct Answers:</label>
        <input value={ans} onChange={(e)=> setAns(e.target.value)} type={"text"} className="col-lg-3" />
</div>
        
        {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}

        </li>
    )
}



export default Question;