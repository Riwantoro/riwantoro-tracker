import { useState } from "react";
import InmateSearch from './components/InmateSearch';
import './App.css';

const App = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (e) => {
    setIsLoading(true);
    setQuery(e.target.value);

    setTimeout(() => {
      setIsLoading(false);
    }, 930);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Warga Binaan Lapas Kerobokan</h1>
        <button className="toggle-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main>
        <InmateSearch
          query={query}
          setQuery={setQuery}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
        />
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Riwantoro Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
