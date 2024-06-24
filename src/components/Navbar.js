import React from 'react'
import "../index.css"; // Import file CSS untuk styling

export default function navbar() {
  return (
    <div className="navbar">
    <div className="left">
      <h1>BOOTCAMP Batch 9: Experiment</h1>
    </div>
    <div className="right">
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </div>
  </div>
  )
}
