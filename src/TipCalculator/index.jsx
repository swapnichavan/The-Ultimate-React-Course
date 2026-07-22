import React, { useState } from 'react'

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  )
}

function TipCalculator() {
  const [bill, setBill] = useState(0)
  const [myOpinion, setMyOpinion] = useState(0)
  const [friendOpinion, setFriendOpinion] = useState(0)

  const percentage = Math.round((myOpinion + friendOpinion) / 2)
  const totalPay = bill + percentage
  console.log(percentage)

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service opinion={myOpinion} setOpinion={setMyOpinion}>
        How much did you like the service?
      </Service>
      <Service opinion={friendOpinion} setOpinion={setFriendOpinion}>
        How much did your friend like the service?
      </Service>
      <Output bill={bill} percentage={percentage} totalPay={totalPay} />
      <Reset setBill={setBill} />
    </div>
  )
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  )
}

function Service({ opinion, setOpinion, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={opinion}
        onChange={(e) => setOpinion(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was good (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  )
}

// function Service({ friendOpinion, setFriendOpinion }) {
//   return (
//     <div>
//       <span></span>
//       <select
//         value={friendOpinion}
//         onChange={(e) => setFriendOpinion(Number(e.target.value))}
//       >
//         <option value={0}>Dissatisfied (0%)</option>
//         <option value={5}>It was good (5%)</option>
//         <option value={10}>It was good (10%)</option>
//         <option value={20}>Absolutely amazing (20%)</option>
//       </select>
//     </div>
//   )
// }

function Output({ bill, totalPay, percentage }) {
  return `You pay $${totalPay} ($${bill} + $${percentage} tip)`
}

function Reset({ setBill }) {
  const onHandleReset = () => {
    setBill(0)
  }

  return (
    <div>
      <button onClick={onHandleReset}>Reset</button>
    </div>
  )
}

export default App
