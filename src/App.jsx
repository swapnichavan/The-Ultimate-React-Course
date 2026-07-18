import React, { useState } from 'react'
import "../src/steps.css"

const messages=["Learn React","Apply for Jobs","Invest your new income"]

const App=()=>{
  return <div>
    <Steps/>
    <Steps/>
  </div>
}


function Steps() {
  const [step,setStep]=useState(1)
  const [isOpen,setIsOpen]=useState(true)
  console.log(step)

  const handlePrevious=()=>{
    // alert("Previous")
    if(step>1){
      setStep((step)=>step-1)
    }
  }
  
  const handleNext=()=>{
    // alert("Next")
    if(step<3)
      setStep((step)=>step+1)
  }

  return (
    <>
        <button className='close' onClick={()=>setIsOpen(is=>!is)}>&times;</button>
      {
        isOpen && 
      <div className='steps'>
      <div className='numbers'> 
      <div className={step>=1?'active':""}>1</div>
      <div className={step>=2?'active':""}>2</div>
      <div className={step>=3?'active':""}>3</div>
      </div>
      <p className='message'>step {step} : {messages[step-1]}</p>
      <div className='buttons'>
        <button style={{background:"#7950f2",color:"#fff"}}
        onClick={handlePrevious}
        >Previous</button>
        <button style={{background:"#7950f2",color:"#fff"}}
        onClick={handleNext}
        >Next</button>
      </div>
    </div>
      }
    </>
  )
}


export default App