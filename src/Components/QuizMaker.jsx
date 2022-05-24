import Question from "./Question";

const QuizMaker=()=>{
    return (
        <>
        <div className="container">

        <h1>Create a new Quiz</h1>
        quiz contains 10 questions
        <ul>
            <li>
                <Question/>
            </li>
        </ul>
        </div>
        </>
    )
}


export default QuizMaker;