import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
    // Error: Falta la dependencia "count" en el array de dependencias
  }, []);

  console.log("Componente App renderizado"); // Error: Uso innecesario de console.log

  const incrementCount = () => {
    count += 1; // Error: Modificación directa del estado
    setCount(count);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" />
          {/* Error: Falta la propiedad "alt" en la etiqueta img */}
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCount}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
