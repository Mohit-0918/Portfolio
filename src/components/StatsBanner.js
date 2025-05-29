import React from "react";

const stats = [
  { value: "1", label: "Years of experience" },
  { value: "7", label: "Projects completed" },
  { value: "8", label: "Technologies mastered" },
  { value: "200", label: "Code commits" },
];

export default function StatsBanner() {
  return (
    <div className="stats-banner">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <h2 className="stat-value">{stat.value}</h2>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
