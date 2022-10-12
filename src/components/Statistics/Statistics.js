import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Statistics = () => {
  const stats = useLoaderData().data;
  // console.log("stats", stats);
  return (
    <div className="container md:p-10">
      <h1 className="text-4xl mt-3 mb-7 text-amber-500 font-semibold">
        Statistics
      </h1>
      <ResponsiveContainer width={300} height={300}>
        <LineChart data={stats}>
          <Line dataKey="total" stroke="#f59e0b" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
