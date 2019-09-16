import React from "react";
import "./App.css";
import FetchPlayers from "./components/FetchPlayers";
import { Button } from "semantic-ui-react";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <Button onClick={toggleMode}>Dark Mode</Button>
      <FetchPlayers />
    </div>
  );
}

export default App;
