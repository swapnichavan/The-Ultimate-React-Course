import React, { useState } from 'react'

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date('July 18 2026')
  date.setDate(date.getDate() + count)
  console.log(date.toDateString())

  const handleIncrementCount = () => {
    setCount((prev) => prev + step)
  }

  const handleDecrementCount = () => {
    setCount((prev) => prev - step)
  }

  const handleIncrementStep = () => {
    setStep((prev) => prev + 1)
  }

  const handleDecrementStep = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <div>
      <Counter
        step={step}
        setStep={setStep}
        count={count}
        setCount={setCount}
        handleIncrementCount={handleIncrementCount}
        handleDecrementCount={handleDecrementCount}
        handleIncrementStep={handleIncrementStep}
        handleDecrementStep={handleDecrementStep}
      />
      {/* <Counter count={count} setCount={setCount} /> */}
      <p>{count === 0 && `Today is ${date.toDateString()}`}</p>
      <p>{count > 0 && `${count} days from ${date}`}</p>
      <p>{count < 0 && `${Math.abs(count)} days ago was ${date}`}</p>
    </div>
  )
}

function Counter(props) {
  console.log(props)
  return (
    <div>
      <p>Counter</p>
      <div>
        <button onClick={props.handleDecrementStep}>-</button>
        <span>Step:{props.step}</span>
        <button onClick={props.handleIncrementStep}>+</button>
      </div>
      <div>
        <button onClick={props.handleDecrementCount}>-</button>
        <span>Count:{props.count}</span>
        <button onClick={props.handleIncrementCount}>+</button>
      </div>
    </div>
  )
}

export default App
