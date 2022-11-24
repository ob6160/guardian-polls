import React, { useEffect, useState } from "react";
import { AnswerAndCount } from "../poll-data/types";
import ProgressBar from "./ProgressBar";

const testData = [
  { answer: "test", bgcolor:"#FFE500", completed: 60 },
  { answer: "check", bgcolor: "#F3C100", completed: 40 },
];

interface Props {results: AnswerAndCount[]}

function PollResultsDisplay( props:Props ) {
    const {results} = props;
    const total = results.reduce((sum, result) => sum + result.count, 0);



const [completed, setCompleted] = useState(0);

useEffect(() => {
  setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
}, []);

  return (
    <div className="App">
      {results.map((item, idx) => (
        <ProgressBar key={item.id} answer={item.text} bgcolor={"#FFE500"} completed={item.count*100/total} />
      ))}
    </div>
  );
}

export default PollResultsDisplay;

