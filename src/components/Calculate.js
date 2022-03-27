import React, { useState } from "react";

function Fatorial() {
  const [Text, setText] = useState(0);
  const [resulta, setResult] = useState();
  
  function calculate() {
    if (Text < 0) {
      return setResult("cannot find for negative number");
    }

    if (Text === 0 || Text === 1) {
      return setResult(1);
    }
  var t0 = performance.now().toFixed(8);
    console.time("Execution Time");
    let fatorial = Text;
    const multi = Text - 1;
    for (var i = multi; i > 1; i--) {
      fatorial = fatorial * i;
    }var t1 = performance.now().toFixed(8);
    var time= (t1-t0);
    document.getElementById("time").innerHTML=time +"ms.  if 0ms try giving >5 digits";
    console.timeEnd("Execution Time");
    setResult(fatorial);
  }


  return (
    <div className="Fatorial">
      <br></br>

      <div className="input">
        <label htmlfor="home">Enter the number </label>
        <input
          type="number"
          required="required"
          onChange={(e) => setText(Number(e.target.value))}
        />
      </div>
      <button className="calculate1" id="calculate" onClick={calculate}>
        calculate
      </button>
      <div className="result" id="resulta">
        {typeof resulta === "number" ? resulta : resulta}
      </div>
      <div><p id="time"></p></div>
    </div>
  );
}

export default function App() {
  return <Fatorial />;
}
