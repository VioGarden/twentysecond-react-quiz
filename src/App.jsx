import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
import { useState, useEffect, useMemo } from "react";
import data from "./data.js"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1) /* decide which pyramid is active */
  const [username, setUsername] = useState(null); // adding user
  const [stop, setStop] = useState(false) /* keeps track of timer, if wrong answer, setTimeout --> true */
  const [earned, setEarned] = useState("$ 0")

  
  const moneyPyramid = useMemo(()=>
    [
      {id: 1, amount: "$ 100"},
      {id: 2, amount: "$ 200"},
      {id: 3, amount: "$ 300"},
      {id: 4, amount: "$ 500"},
      {id: 5, amount: "$ 1000"},
      {id: 6, amount: "$ 2000"},
      {id: 7, amount: "$ 4000"},
      {id: 8, amount: "$ 8000"},
      {id: 9, amount: "$ 16000"},
      {id: 10, amount: "$ 32000"},
      {id: 11, amount: "$ 64000"},
      {id: 12, amount: "$ 125000"},
      {id: 13, amount: "$ 250000"},
      {id: 14, amount: "$ 500000"},
      {id: 15, amount: "$ 1000000"},
    ].reverse(),[]);
  // data (question itself), setTimeOut (if incorrect answer, end game, must change boolean)
  // setQuestionNumber (if correct number pressed, must change number)
  // questionNumber (which question to choose from)

  // keeps track/finds how much money earned
  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername}/>
      ) : (
        <>
          <div className="main">
            {stop ? (<h1 className="endText">You earned: {earned}</h1>) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer 
                setStop={setStop}
                questionNumber={questionNumber}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia 
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div> 
          </>
          )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li 
            className={questionNumber === m.id 
              ? "moneyListItem active" 
              : "moneyListItem"
            }>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
          </li>    
          ))}
        </ul>
      </div>
      </>
      )}
    </div>);}
export default App;
