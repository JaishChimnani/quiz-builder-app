import { render } from "@testing-library/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const QuizDisplay = () => {

    const Params = useParams();
    const { id } = (Params);
    const quizKey = id;
    console.log(quizKey);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(0);
    const quiz = JSON.parse(localStorage.getItem(quizKey));
    console.log(quiz);



    function handleAns(option,id) {
        alert(id);
        if (question === quiz.questions.length-1 ) {
            setShowScore(true);
        }
        const isCorrect = checkAns(option);
        if (isCorrect) {
            setScore(score + 1);
            alert("score:"+score)
        } else {
            
        }
        setQuestion(question + 1);
        alert(question);

    }
    function checkAns(value) {
        // var value = quiz.questions[question].options[oId];
        var answer=false;
        alert(value);
        console.log(quiz.questions[question].ans)
        quiz.questions[question].ans.map((ansItem,ansIndex)=>{
            alert(ansItem+value)
            if (value === ansItem) {
                alert("Correct answer")
                answer= true;
            }
        })
        // quiz.questions[question].ans.map((item, index)=>{
        //     if(value==item){
        //         return true;
        //     }
        // })
        return answer;
    }
    return <>
        <div className="container text-white">

            {showScore ? <h2 className=" text-center  m-2 p-4 rounded ">Your Score is {score}/{question} <br />Refresh the page to reattempt the Quiz</h2>
                :
                <div>

                    <h1 className="text-center h2 ">{quiz.quizTitle}</h1>
                    <ol >

                        {/* {quiz.questions.map((item,index)=>{ */}
                        {/* return */}

                        <span>{question + 1}.  </span>
                        <span>{quiz.questions[question].question}</span>
                        <ol className="row">

                            {quiz.questions[question].options.map((option, i) => {
                                return <>
                                    <li onClick={() => handleAns(option,i)} id={"option" + question} className="col-lg-3 m-5 btn  border text-white">
                                        {option}
                                    </li>
                                </>
                            }
                            )}
                        </ol>
                        {/* })} */}
                    </ol>
                </div>
            }
        </div>
    </>
}

export default QuizDisplay;