import Question from "./Question";

const QuizMaker=()=>{
    return (
        <>
        <div className="text-white container">

        <h1>Create a new Quiz</h1>
        quiz contains 10 questions
        <ol>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
        </ol>
        </div>
        </>
    )
}


export default QuizMaker;