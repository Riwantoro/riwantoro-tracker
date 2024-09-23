import { useState } from "react";
import InmateSearch from './components/InmateSearch';
import './App.css';

const App = () => {
  const [query, setQuery] = useState(""); // State to track the user's search query

  return (
    <div className="App">
      <h1>Riwantoro Tracker - Data WBP Lapas Kerobokan</h1>
      {/* Passing the query and setQuery as props to InmateSearch component */}
      <InmateSearch query={query} setQuery={setQuery} />
    </div>
  );
};

export default App;
