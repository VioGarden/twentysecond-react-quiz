import { useState, useEffect } from "react"

export default function Trivia({
    data, 
    setStop, 
    questionNumber, 
    setQuestionNumber}) {
        const [question, setQuestion] = useState(null); // question display and change
        const [selectedAnswer, setSelectedAnswer] = useState(null); // state of selected answers
        const [className, setClassName] = useState("answer"); // state to hold selected answer

        useEffect(()=>{
            setQuestion(data[questionNumber - 1]) // usestate question number starts at 1, but arrays start at 0
        }, [data, questionNumber]); // dependencies

        // correct/wrong answer logic function
        const delay = (duration, callback) => {
            setTimeout(() => {
                callback();
            }, duration);
        };

        // function to select and hold answer
        const handleClick = (a) =>{
            setSelectedAnswer(a);
            setClassName("answer active");
            delay(500, () => 
                setClassName(a.correct ? "answer correct" : "answer wrong")
            );
            delay(4000, () => {
                if (a.correct) {
                    setQuestionNumber((prev) => prev + 1)
                    setSelectedAnswer(null)
                    if (questionNumber === 15){
                        setStop(true);
                    }
                } else {
                    setStop(true);
                }
            }
            );
        };

  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a) => (
                <div 
                className={selectedAnswer === a ? className : "answer"} 
                onClick={() => handleClick(a)}
                >
                {a.text}
                </div>
            ))}
        </div>
    </div>
  )
}
