import { useFormik } from "formik";
import { useState } from "react";
import Question from "./Question";


const QuizMaker = () => {

    const [showAddAnswer, setShowAddAnswer] = useState(false);

    const formik = useFormik({
        initialValues: {
            quizTitle: "",
            questions: [
                {
                    optionType: "",
                    question: "",
                    options: [""],
                    ans: [""]
                }
            ]
        }, onSubmit: (quiz) => {
            const key = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

            alert(key);
            // console.log(quiz);
            localStorage.setItem(key, JSON.stringify(quiz));
            console.log(localStorage.getItem(key));

        }
    })


    const QuestionList = () => {

    }


    // document.getElementById("addAnswer").style.display = "none";
    function handleOptionType(e, index) {
        
    }


    function incNumberOfQuestions(i) {
        if (formik.values.questions.length < 10) {
            setShowAddAnswer(false)
            formik.setValues({
                ...formik.values,
                questions: [
                    ...formik.values.questions,
                    {
                        optionType: "",
                        question: "",
                        options: [""],
                        ans: [""]
                    }]
            })
        } else {
            document.getElementById("addQuestion").style.display = "none";
        }
    }



    return (
        <>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="text-white">

<div className="text-center">

                    <label className="m-5">Quiz Title</label>
                    <input className="m-3" name="quizTitle" type="text" value={formik.values.quizTitle} onChange={formik.handleChange} />
</div>
                    {/* {alert(formik.values.quizTitle)} */}
                    <ol className="">


                        {formik.values.questions.map(function (item, index) {
                            // {alert(formik.values.questions[index].question)}

                            return (
                                <div>
                                    <li className="m-2">

                                        <label className="m-4" htmlFor="ta-1">Question</label>
                                        <textarea name={`questions[${index}].question`} value={formik.values.questions[index].question} onChange={formik.handleChange} className=" col-lg-12 text-white bg-transparent border rounded " />
                                        <label htmlFor="" className="m-1">Options :</label>
                                        <select className="form-select m-3" id="type" onChange={(e)=>{
                                            // alert(index)
                                            var selected = e.target.value;
                                            alert(selected)
                                            if (selected === "Multiple") {
                                                // document.getElementById("addAnswer").style.display = "block";
                                                setShowAddAnswer(true);
                                                const v = [...formik.values.questions];
                                                v[index].optionType=selected;
                                                
                                                formik.setValues({
                                                    ...formik.values,
                                                    questions: v
                                                })
                                            } else {
                                                setShowAddAnswer(false);
                                                const v = [...formik.values.questions];
                                                v[index].optionType=selected;
                                    
                                                formik.setValues({
                                                    ...formik.values,
                                                    questions: v
                                                })
                                            }
                                        }}>
                                            <option value="Single">Single Type MCQ</option>
                                            <option value="Multiple" >Multiple Type MCQ</option>
                                        </select>
                                        <div className="row">

                                            {formik.values.questions[index].options.map((it, i) => {
                                                return <>

                                                    <input name={`questions.[${index}].options[${i}]`} value={formik.values.questions[index].options[i]} onChange={formik.handleChange} className="m-5 col-lg-3 " type="text" id="" />

                                                </>
                                            })}
                                        <span className="bg-transparent btn btn-outline-light m-5" id="addOption" onClick={() => {
                                            if (formik.values.questions[index].options.length < 5) {
                                                const v = [...formik.values.questions];
                                                v[index].options.push("");
                                                
                                                formik.setValues({
                                                    ...formik.values,
                                                    questions: v
                                                })
                                            } else {
                                                document.getElementById("addOption").style.display = "none";
                                                
                                            }
                                        }}>+</span>
                                        </div>

                                        <div className="row">

                                            <label htmlFor="" className="col-lg-3">Correct Answers:</label>
                                            {formik.values.questions[index].ans.map((ansItem, ansIndex) => {
                                                return (
                                                    <input value={formik.values.questions[index].ans[ansIndex]} onChange={formik.handleChange} name={`questions.[${index}].ans[${ansIndex}]`} type={"text"} className="col-lg-3 m-3" />
                                                )
                                            })}
                                            {showAddAnswer ? <div onClick={() => {
                                                if (formik.values.questions[index].ans.length >= 5) {
                                                    document.getElementById("addAnswer").style.display = "none";
                                                } else {

                                                    const v = [...formik.values.questions];
                                                    v[index].ans.push("");

                                                    formik.setValues({
                                                        ...formik.values,
                                                        questions: v
                                                    })
                                                }
                                            }} className="btn btn-outline-light m-3 " id="addAnswer">+</div>
                                                : null}
                                        </div>

                                        {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}

                                    </li>
                                </div>
                            )
                        })}









                    </ol>





                    <div id="addQuestion" onClick={(i) => incNumberOfQuestions(i)} className="btn btn-dark m-4">
                        + Add Question</div>
                </div>

                <div className="text-center m-5">
                    <div className="btn btn-dark" onClick={formik.handleSubmit}> Publish Quiz</div></div>
            </form>
            {/* <div className="text-white container">

<h1>Create a new Quiz</h1>
quiz contains 10 questions
<ol>
<Question/>
</ol>
</div> */}
        </>
    )
}


export default QuizMaker;