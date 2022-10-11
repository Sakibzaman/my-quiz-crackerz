import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const Quiz = () => {
  const { name, id, questions, total } = useLoaderData().data;

  console.log(questions);
  // quiz.questions.map((question) => console.log(question));

  return (
    <div>
      <div>
        <h1 className="text-2xl text-blue-500 font-bold my-6">
          Quiz of {name}
          <div>
            {/* {questions.map((question) => (
              <QuizCard key={id} question={question}></QuizCard>
            ))} */}
          </div>
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Quiz;
