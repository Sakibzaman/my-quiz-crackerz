import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ q }) => {
  const { question, correctAnswer, options, id } = q;
  const [clicked, setClicked] = useState(false);

  const handleOptionSelect = (e) => {
    setClicked(true);

    let selectedOption = e.target.value;
    if (selectedOption == correctAnswer) {
      toast.success("Correct Answer!");
    } else {
      toast.error(" Whoops! Wrong Answer!");
    }
  };

  const showCorrectAns = () => {
    toast.info(`The correct answer is: ${correctAnswer}`);
  };

  return (
    <div className="my-24 w-[70vw] mx-auto shadow-xl rounded-xl">
      <div className="mx-10  ">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold text-blue-600 mt-8">{question}</h1>
          <button
            onClick={showCorrectAns}
            className=" ml-5 text-3xl rounded-2xl text-blue-500"
          >
            &#8505;
          </button>
        </div>

        <div className="my-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-4 md:w-3/4 mx-auto ">
          {options.map((option) => (
            <div
              className={`  p-3 bg-amber-100 flex items-center justify-start border-2 border-amber-500 rounded-lg mb-8`}
            >
              {!clicked ? (
                <input
                  onClick={handleOptionSelect}
                  type="checkbox"
                  value={option}
                  className="w-4 h-4"
                />
              ) : (
                <input
                  disabled
                  onClick={handleOptionSelect}
                  type="checkbox"
                  value={option}
                  className={` w-4 h-4`}
                />
              )}
              <label htmlFor="" className={` text-lg font-semibold px-5`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;
