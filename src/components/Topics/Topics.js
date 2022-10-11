import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Topics = () => {
  const topics = useLoaderData().data;
  const { name, id, logo, total } = topics;
  return (
    <div>
      <div className="w-11/12 mx-auto my-8 md:grid grid-cols-2 gap-4">
        {topics.map((topic) => (
          <div className="rounded-xl mx-12 shadow-lg p-3">
            <img className="bg-blue-100" src={topic.logo} alt="" />
            <div>
              <p className="text-slate-500 text-3xl font-semibold">
                Total Quiz: {topic.total}
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-3xl font-semibold text-blue-500">
                {topic.name}
              </p>
              <button className="bg-amber-500 text-xl rounded-md text-white font-semibold hover:bg-amber-600 px-3 py-1">
                <Link to={`${topic.id}`}>Start Practice</Link>
                {/* <Link to={`/topics/${topic.id}`}>Start Practice</Link> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
