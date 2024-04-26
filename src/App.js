
import { useState } from 'react';
import './App.css';

export default function App() {

  const [tip, setTip] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  return (
    <div className="App">
      <BillInput tip={tip} onTip={setTip} />

      <PercentageInput percentage={percentage1} onPercentage={setPercentage1} >How much did you like the service?</PercentageInput>
      <PercentageInput percentage={percentage2} onPercentage={setPercentage2}>How did your friend like the service?</PercentageInput>

      <Total tip={tip} percentage1={percentage1} percentage2={percentage2} />
      <Button onTip={setTip} onPercentage1={setPercentage1} onPercentage2={setPercentage2} />
    </div>
  );
}

function BillInput({ tip, onTip }) {



  return (
    <h3>How much was the bill? <input type='text' value={tip} onChange={(e) => onTip(Number(e.target.value))} /></h3>
  )
}

function PercentageInput({ children, percentage, onPercentage }) {



  return (
    <h3>
      {children}
      <select value={percentage} onChange={(e) => onPercentage(Number(e.target.value))}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was ok(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely Amazing!(20%)</option>
      </select>
    </h3>
  )
}

function Total({ tip, percentage1, percentage2 }) {

  var sumTips = (percentage1 + percentage2) / 2;
  var totalPercentage = (tip * sumTips) / 100;
  var totalBill = tip + totalPercentage;

  return (
    <div>
      {tip !== null ? <h2>You have to pay ${totalBill} (${tip} + ${totalPercentage} tip)</h2> : <h2>Please enter the bill</h2>}
    </div>
  )
}

function Button({ onTip, onPercentage1, onPercentage2 }) {

  function Reset() {
    onTip("")
    onPercentage1(0)
    onPercentage2(0)
  }

  return (
    <button onClick={() => Reset()} >Reset</button>
  )
}