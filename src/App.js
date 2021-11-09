import './App.css';
import SearchEngine from './SearchEngine';



function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>
     🌺Weather App🌺
      </h1>
<SearchEngine />
      <footer className="App-footer text-center">
                          <a className="source-link" title="source-link" href="https://github.com/chepre1986/weather-patrycja.git" target="_blank" rel="noreferrer">Open-source</a>
      {" "} by Patrycja Szumska.
      </footer>
    </div>
    </div>
  );
}

export default App;
