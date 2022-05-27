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
        // alert(id);
        if (question === quiz.questions.length-1 ) {
            setShowScore(true);
        }
        const isCorrect = checkAns(option);
        if (isCorrect) {
            setScore(score + 1);
            // alert("score:"+score)
        } else {
            
        }
        setQuestion(question + 1);
        // alert(question);

    }
    function checkAns(value) {
        // var value = quiz.questions[question].options[oId];
        var answer=false;
        // alert(value);
        console.log(quiz.questions[question].ans)
        quiz.questions[question].ans.map((ansItem,ansIndex)=>{
            // alert(ansItem+value)
            if (value === ansItem) {
                alert("Correct answer")
                answer= true;
            }
        })
        if(answer===false) {
            alert("wrong answer")
        }
        // quiz.questions[question].ans.map((item, index)=>{
        //     if(value==item){
        //         return true;
        //     }
        // })
        return answer;
    }
    function handleSingleClick(id){
        const optionid="singleoption"+id;
        // alert(optionid)
        document.getElementById(optionid).checked=true;
    }
    function handleMultipleClick(id){
        const optionid="multipleoption"+id;
        // alert(optionid)
        document.getElementById(optionid).checked=true;
    }
    function nextQuestion(){
        if(quiz.questions[question].optionType==="Multiple"){
            // alert("Multiple")
            var ele = document.getElementsByName('MultipleOptions');
            var value=[];
            var id;
            
            for(var i = 0; i < ele.length; i++) {
                // alert("LOOP")
                if(ele[i].checked){
                    // alert(ele[i].value)

                    value.push(
                        ele[i].value)
                        id=i;
                    }
            }
            // handleAns(value,id)
            if (question === quiz.questions.length-1 ) {
                setShowScore(true);
            }

            var isCorrect = true;
            for(var i = 0; i <value.length; i++){
                if(!checkAns(value[i])){
                    isCorrect=false;
                }
            }
            if(isCorrect){
                setScore(score+1);
            }
            setQuestion(question+1);
            // alert("question"+question);
        }
            else{
                var ele = document.getElementsByName('options');
                var value="";
                var id;
                
                for(var i = 0; i < ele.length; i++) {
                    if(ele[i].checked)
                    value = ele[i].value;
                    id=i;
                }
                handleAns(value,id)
            }
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
                        <ul className="row " >

                            {quiz.questions[question].options.map((option, i) => {
                                return <>
                                {quiz.questions[question].optionType===""?
                                <li className="m-5 " >
                                    <input type="radio" name="options" id={"singleoption"+i} value={option}/>
                                    <label className="btn btn-outline-light option m-4 col-lg-4" onClick={()=>handleSingleClick(i)} for={option}>{option}</label>
                                </li>
                                    :<li>
                                        <input type="checkbox" name="MultipleOptions" id={"multipleoption"+i} value={option}/>
                                        <label className="btn btn-outline-light option m-4 col-lg-4" onClick={()=>handleMultipleClick(i)} for={option}>{option}</label>
                                        
                                        
                                        
                                        </li>}
                                    {/* <li onClick={() => handleAns(option,i)} id={"option" + question} className="col-lg-3 m-5 btn btn-outline-dark  border text-white">
                                        {/* <input type="checkbox" name="" id="" /> */}
                                        {/* {option} */}
                                    {/* </li> */} 
                                </>
                            }
                            )}
                        </ul>
                            <button onClick={nextQuestion} className="btn btn-dark">Next</button>
                        {/* })} */}
                    </ol>
                </div>
            }
        </div>
    </>
}

export default QuizDisplay;