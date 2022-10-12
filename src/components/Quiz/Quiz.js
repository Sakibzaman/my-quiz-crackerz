import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import Question from "./Question";

const Quiz = () => {
  const { name, id, questions, total } = useLoaderData().data;

  // console.log("questions", questions);
  questions.map((q) => console.log(q));

  return (
    <div>
      <div>
        <h1 className="text-2xl text-amber-600 font-bold my-6">
          Quiz of {name}
        </h1>
        <div>
          {questions.map((q) => (
            <Question key={q.id} q={q}></Question>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Quiz;
