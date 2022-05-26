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
            console.log(quiz);
        }
    })

    const questionList=formik.values.questions.map(function() {
        return <div>
           <input className="m-3" type="text" value={formik.values.quizTitle} onChange={formik.handleChange}/>
               <Question />
        </div>;   
   })

    function incNumberOfQuestions(i) {
        if (formik.values.questions.length < 10) {
            formik.setValues({
                ...formik.values,
                questions:[
                    ...formik.values.questions,
                    {
                    optionType: "",
                    question: "",
                    options: [""],
                    ans: [""]
                }]
            })
        }else{
            document.getElementById("addQuestion").style.display="none";
        }
    }

    return (
        <>
            <ol className="text-white">

                    return (
                        <>

                        <label className="m-5">Quiz Title</label>
                        <ul className="">{questionList}</ul>
 <button id="addQuestion" onClick={(i) => incNumberOfQuestions(i)} className="btn btn-dark m-4">
                                + Add Question</button>
                        </>
                    )
                )
            </ol>
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