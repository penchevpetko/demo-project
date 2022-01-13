import { tests } from "./Tests";
import { useParams } from "react-router-dom";
import { useState } from 'react';

export default function TestPage() {
  const { testId } = useParams();
  const test = tests[testId];
  const randomNum = Math.floor(Math.random() * test.questions.length);

  const rightQuestion = test.questions[`${randomNum}`].question;
  const rightAnswer = test.questions[`${randomNum}`].answer[0].text;

  const [nextQuestion, setNextQuestion] = useState();
  const [nextAnswer, setNextAnswer] = useState();

  const nextHandler = () => {
      setNextQuestion(rightQuestion);
      setNextAnswer(rightAnswer);
  }

  return (
    <div>
      <div>{test.title}</div>
      <p>{nextQuestion}</p>
      <input />
      <p className="color">{nextAnswer}</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}
