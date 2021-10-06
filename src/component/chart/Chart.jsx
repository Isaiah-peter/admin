import "./chart.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan",
    "Active User": 200,
  },
  {
    name: "feb",
    "Active User": 3000,
  },
  {
    name: "match",
    "Active User": 2000,
  },
  {
    name: "april",
    "Active User": 2780,
  },
  {
    name: "may",
    "Active User": 1890,
  },
  {
    name: "june",
    "Active User": 2390,
  },
  {
    name: "junly",
    "Active User": 3490,
  },
  {
    name: "aug",
    "Active User": 500,
  },
  {
    name: "sept",
    "Active User": 2000,
  },
  {
    name: "oct",
    "Active User": 1490,
  },
  {
    name: "nov",
    "Active User": 490,
  },
  {
    name: "dec",
    "Active User": 2490,
  },
];

function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Active User Detail</h3>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="Active User"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Tooltip />
          <CartesianGrid />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
