import { useFormik } from "formik";
import Question from "./Question";


const QuizMaker = () => {


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
           const key =Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
           
            alert(key);
            // console.log(quiz);
            localStorage.setItem(key, JSON.stringify(quiz));
            console.log(localStorage.getItem(key));

        }
    })


    const QuestionList = () => {

    }




    function incNumberOfQuestions(i) {
        if (formik.values.questions.length < 10) {
            formik.setValues({
                ...formik.values,
                questions: [
                    ...formik.values.questions,
                    {
                        optionType: "",
                        question: "",
                        options: [""],
                        ans: ""
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


                    <label className="m-5">Quiz Title</label>
                    <input className="m-3" name="quizTitle" type="text" value={formik.values.quizTitle} onChange={formik.handleChange} />
                    {/* {alert(formik.values.quizTitle)} */}
                    <ol className="">


                       { formik.values.questions.map(function (item, index) {
                    // {alert(formik.values.questions[index].question)}
        
        return(
                        <div>
                            <li className="m-5">

                                <label className="m-4" htmlFor="ta-1">Question</label>
                                <textarea name={`questions[${index}].question`}  value={formik.values.questions[index].question} onChange={formik.handleChange} className=" col-lg-12 text-white bg-transparent form-control" />
                                <label htmlFor="" className="m-1">Options :</label>
                                <div className="row">

                                    {formik.values.questions[index].options.map((it, i) => {
                                        return <>

                                            <input name={`questions.[${index}].options[${i}]`} value={formik.values.questions[index].options[i]} onChange={formik.handleChange} className="m-5 col-lg-3 " type="text"  id="" />

                                        </>
                                    })}
                                </div>
                                <div className="bg-transparent btn btn-outline-light" id="addOption" onClick={() => {
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
                                }}>+</div>

                                <div className="row">

                                    <label htmlFor="" className="col-lg-3">Correct Answers:</label>
                                    <input value={formik.values.questions[index].ans} onChange={formik.handleChange} name={`questions.[${index}].ans`} on type={"text"} className="col-lg-3" />
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