import React, {useState} from "react";
import "./Eightball.css";

const Eightball = ({answers}) => {

    const chooseRandom = () => {
        let idx = Math.floor(Math.random() * answers.length);
        return answers[idx];
    };
    const [answer, setAnswer] = useState({msg: "Think of a Question",
                                          color: "black"});

    const restart = () => {
        setAnswer({msg: "Think of a Question",
        color: "black"});
    }

    const bColor = {backgroundColor: answer["color"]};
    return (
        <>
        <div style={bColor}
        className="eightball" 
        onClick={() => setAnswer(chooseRandom())}
        >
        <h1>{answer["msg"]}</h1>
        </div>
        <div>
        <button onClick={restart} className="reset">Reset</button>
        </div>
        </>
    );
}

export default Eightball;