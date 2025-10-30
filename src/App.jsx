import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [Result, setResult] = useState(null);

  return (
    <>
      <div className="container">
        <div className="w-50 mx-auto mt-5">
          <h1 className="fw-semibold mb-3 text-center">
            Ingresar dos números para multiplicar
          </h1>
          <div className="mb-3">
            <label className="form-label fw-semibold">Número 1</label>
            <input
              type="number"
              className="form-control"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Número 2</label>
            <input
              type="number"
              className="form-control"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
            />
          </div>
          <button
            className="btn btn-success mb-3"
            onClick={() => {
              setResult(firstNumber * secondNumber);
            }}
          >
            Multiplicar
          </button>
          {Result !== null ? (
            <p>El resultado es: {Result}</p>
          ) : (
            Result && <p>Por favor complete todos los campos</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
