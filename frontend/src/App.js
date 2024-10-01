import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState([]);
  const [title, setTitle] = useState('Hello World');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3005/');
      const data = await response.json();
      setValue(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-text">
        <h2>{title}</h2>
        <select onChange={(e) => setTitle(e.target.value)}>
          <option value="Hello World" selected disabled>
            Choose a language
          </option>
          {value.map((item) => {
            const name = Object.keys(item);
            const text = item[name];

            return (
              <option key={name} value={text}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default App;
