import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const topics = useLoaderData().data;
  const { name, id, logo, total } = topics;
  console.log(topics);
  return (
    <div>
      <h1 className="text-orange-500 font-bold text-3xl my-6">Quiz Master</h1>
      <p className="text-lg text-left px-4 md:px-24 font-semibold">
        You can test your Developing skills with Quiz Master website. The test
        contains several questions and there is no time limit. The test is not
        official, it's just a nice way to see how much you know, or don't know,
        about React, Javascript, CSS and Git. You will get 1 point for each
        correct answer. At the end of the Quiz, your total score will be
        displayed.
      </p>
      {/* <p>hello: {topics.length}</p> */}
      <div className="w-auto my-8 md:grid grid-cols-4">
        {topics.map((topic) => (
          <div className="rounded-xl mx-12 shadow-lg p-3">
            <img className="bg-blue-100" src={topic.logo} alt="" />
            <div className="flex justify-between mt-3">
              <p className="font-semibold text-blue-500">{topic.name}</p>
              <button className="bg-orange-500 rounded-md text-white font-semibold hover:bg-orange-600 px-3 py-1">
                <Link to={`/topics/${topic.name}`}>Start Practice</Link>
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
