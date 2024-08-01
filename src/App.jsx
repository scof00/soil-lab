import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "../views/applicationViews";

function App() {
  const [count, setCount] = useState(0);

  return <ApplicationViews />;
}

export default App;
