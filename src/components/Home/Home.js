import React from "react";
import image from "../Home/quiz.jpg";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const topics = useLoaderData().data;
  //   const { name, id, logo, total } = topics;
  //   console.log("topics", topics);
  return (
    <div>
      <h1 className="text-amber-500 font-bold text-5xl mt-4">Quiz Master</h1>
      <h1 className="text-slate-400 font-semibold text-ls mb-6">
        Your favorite Quiz Website
      </h1>
      <div className="my-10 mx-auto w-10/12 text-center md:flex">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <p className="text-slate-700 text-md font-semibold px-4 md:px-24">
            You can test your Developing skills with Quiz Master website. The
            test contains several questions and there is no time limit. The test
            is not official, it's just a nice way to see how much you know, or
            don't know, about React, Javascript, CSS and Git. You will get 1
            point for each correct answer. At the end of the Quiz, your total
            score will be displayed.
          </p>
        </div>
      </div>
      {/* <p>hello: {topics.length}</p> */}

      <div className="w-auto my-8 md:grid grid-cols-4">
        {topics.map((topic) => (
          <div className="rounded-xl mx-12 shadow-2xl p-3">
            <img className="bg-blue-100" src={topic.logo} alt="" />
            <div>
              <p className="text-slate-500 text-left font-semibold">
                Total Quiz: {topic.total}
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="font-semibold text-blue-500">{topic.name}</p>
              <button className="bg-amber-500 rounded-md text-white font-semibold hover:bg-amber-600 px-3 py-1">
                <Link to={`/topics/${topic.id}`}>Start Practice</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
