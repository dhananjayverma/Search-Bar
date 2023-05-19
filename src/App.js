import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import { SearchResult } from "./Components/SearchResult";
function App() {
  const [res, setRes] = useState([]);
  return (
    <div className="App">
      <div className="serach-bar-container">
        <SearchBar setRes={setRes} />
        <SearchResult res={res} />
      </div>
    </div>
  );
}
export default App;
