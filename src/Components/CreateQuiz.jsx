import { Navigate, useNavigate } from "react-router-dom";

const CreateQuiz=()=>{
    const nav=useNavigate();
    function handleClick(){
        // <Navigate to={"/quiz"}/>
        nav("/quiz");
    }
    return (
        <>
        <div className="text-center">

        <div className="btn  btn-dark m-5 " onClick={handleClick}>
            Create Quiz
        </div>
        </div>
        </>
    )
}


export default CreateQuiz;