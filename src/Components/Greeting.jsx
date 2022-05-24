import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "../CSS/Style.css";
import Login from "./Login"
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

const Greeting = () => {

    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
            // confirmPassword:""
        },
        validationSchema: Yup.object({
            name:Yup.string().max(30,"Must be less than 30 characters").required("Required"),
            email:Yup.string().email("Invalid Email").required("Required"),
            password:Yup.string().min(8,"minimum 8 characters required").max(16,"max 16 Characters allowed").required("Required")
            // confirmPassword:Yup.string().min(8,"minimum 8 characters required").max(16,"max 16 Characters allowed").required("Required").oneOf([Yup.ref('password')],"Passwords do not match")
        }),
        onSubmit:(values)=>{
            const userName=formik.values.name;
            const email=formik.values.email;
            const password=formik.values.password;
            localStorage.setItem(email,JSON.stringify(password));
            
            console.log(localStorage.getItem('email'));
    
        }
    })

    

    // console.log(formik.values);
    return (
        <div className=" row">

        <div  className=" m-3 p-5 bg-quiz col col-lg-4">
            <h1 className="text-white">Welcome to <i>Quizzy-quiz</i></h1>
            <form className="m-5" onSubmit={formik.handleSubmit}>
                <div className="col-lg-12">

                <input  className="m-2 form-control" type="text" id="name" 
                onChange={formik.handleChange}
                value={formik.values.name} name="name" placeholder="Fullname" />
                {formik.errors.name ? <p>{formik.errors.name}</p>:null}
                </div>
                <div className="col-lg-12">

                <input  className="m-2 form-control" 
                onChange={formik.handleChange}
                type="email" id="email" name="email" value={formik.values.email} placeholder="Email" />
                {formik.errors.email ? <p>{formik.errors.email}</p>:null}
                </div>
                <div className="col-lg-12">

                <input  className="m-2 form-control" 
                onChange={formik.handleChange}
                type="password" id="password" name="password" value={formik.values.password} placeholder="Password" />
                {formik.errors.password ? <p>{formik.errors.password}</p>:null}
                </div>
{/* 
<div className="col-lg-12">

                <input type="password" value={formik.values.confirmPassword} onChange={formik.handleChange} placeholder="confirm password" className="m-2 form-control"/>
                {formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p>:null}
</div> */}

                <div className="col-lg-12">
                    <button className="btn btn-outline-dark  rounded m-3" type="submit" name="Register"   id="" >Register</button>
                    <div>Already have an account  
                        <Link className="text-dark" to="/Login"  > Login?</Link>
                    </div>
                </div>
            </form>
        </div>
        <div className=" col col-lg-6 p-5 m-3">
            <img className="rounded  img-logo" src="https://blog.hubspot.com/hubfs/google-quiz.jpg" alt="" />
        </div>
        </div>
    )
}




export default Greeting;