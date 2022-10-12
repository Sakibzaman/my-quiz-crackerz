import React from "react";

const Question = ({ q }) => {
  const { question, correctAnswer, options } = q;
  return (
    <div className="my-24 w-[70vw] mx-auto shadow-xl rounded-xl">
      <div className="mx-10 ">
        <h1 className="text-2xl font-bold text-blue-600 mt-8">{question}</h1>
        <div className="my-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-4 md:w-3/4 mx-auto ">
          {options.map((option) => (
            <div className="p-3 bg-amber-100 flex items-center justify-start border-2 border-amber-500 rounded-lg mb-8">
              <input type="checkbox" className="w-4 h-4" />
              <label htmlFor="" className="text-lg font-semibold px-5">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
