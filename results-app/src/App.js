import "./App.css";
import { resultsData } from "./data";

function App() {
  let total = resultsData.reduce(function(prev, current) {
    return (prev + +current.score);
  }, 0);
  
  return (
    <div className="App">
      <div className="results-section">
        <h1>Your Result</h1>
        <p>{total/resultsData.length}</p>
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>

      <div className="summary-section">
        <h1>Summary</h1>
        <div>
          {resultsData.map((result) => (
            <p>
              <span>
                {result.category}
                <span>{result.score}/100</span>
              </span>
            </p>
          ))}
        </div>
        <p>continue</p>
      </div>
    </div>
  );
}

export default App;
