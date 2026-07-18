import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  let date = new Date('Jul 18 2026')
  date.setDate(date.getDate() + count)
  console.log(date)

  const onHandleIncrement = () => {
    setCount((prev) => prev + step)
    // alert('ok')
  }

  const onHandleDecrement = () => {
    setCount((prev) => prev - step)
  }

  const onHandleReset = () => {
    setCount(0)
    setStep(1)
  }

  return (
    <div>
      <h3>Counter</h3>
      <input
        type="range"
        value={step}
        min={1}
        max={10}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      :{step}
      <button onClick={onHandleDecrement}>-</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={onHandleIncrement}>+</button>
      {count === 0 && <p>Today is {date.toDateString()}</p>}
      {count > 0 && (
        <p>
          {count} days from today is {date.toDateString()}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)} days ago was {date.toDateString()}
        </p>
      )}
      {(count !== 0 || step !== 0) && (
        <button onClick={onHandleReset}>Reset</button>
      )}
    </div>
  )
}

export default Counter
