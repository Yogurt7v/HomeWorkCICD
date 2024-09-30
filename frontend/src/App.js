import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState({});

  useEffect(() => {
    fetch('/api');
  }, []);

  return (
    <div className="App">
      <div className="App-text">
        <h2>Hello World</h2>
        <select
          defaultValue={value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="" disabled selected>
            Select
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

export default App;
