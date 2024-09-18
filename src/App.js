import React, { useState } from "react";

const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

const combination = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

const SimpleBinomialExpansion = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [n, setN] = useState();
  const [result, setResult] = useState("");

  const calculateExpansion = () => {
    let expansion = "";

    for (let k = 0; k <= n; k++) {
      const coefficient = combination(n, k);
      const termA = Math.pow(a, n - k);
      const termB = Math.pow(b, k);
      const term = coefficient * termA * termB;

      expansion +=
        (k === 0 ? "" : " + ") + term + (n - k > 0 ? `x^${n - k}` : "");
    }

    setResult(expansion);
  };

  return (
    <div>
      <h1>Binomial Expansion</h1>

      <div>
        <label>
          Enter value of a:
          <input
            type="number"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Enter value of b:
          <input
            type="number"
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Enter value of n:
          <input
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
          />
        </label>
      </div>

      <button onClick={calculateExpansion}>Calculate Expansion</button>

      {result && (
        <div>
          <h3>Expansion Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleBinomialExpansion;
