import React from "react"; //library js yang membuat user interface
import ReactDOM from "react-dom"; //library js membantu react untuk berinteraksi dgn dom (memunculkan di browser)
import App from "./App";

//menampilkan components yang telah ditampung di app.js
ReactDOM.render(<App />, document.getElementById("root"));
