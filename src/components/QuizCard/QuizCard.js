import React from "react";

const QuizCard = ({ question }) => {
  console.log(question);
  return (
    <div>
      <p>{question}</p>
    </div>
  );
};

export default QuizCard;
