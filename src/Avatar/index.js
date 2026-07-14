import React from 'react'
import "./style.css"

function App() {
  return (
    <div className='card'>
      <Avatar/>
      <div className='data'>
      <Intro/>
      <SkillList/>
      </div>
    </div>
  )
}

function Avatar(){
  return(
    <img 
    className='avatar'
    src="./TShirt1.jpg" alt="TShirt1"
    />
  )
}

function Intro(){
  return (
    <div>
      <h1>Lorem ipsum dolor</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae quibusdam nobis architecto doloribus ipsum accusamus porro deserunt ipsam, aspernatur rerum rem sapiente perspiciatis maxime voluptatem accusantium tempore. Nobis, quas?</p>
    </div>
  )
}

function SkillList(){
  return (
    <div className='skill-list'>
      <Skill lang="HTML+CSS" emoji="🙂" color="#123456"/>
      <Skill lang="JavaScript" emoji="🤟" color="orangered"/>
      <Skill lang="Web Design" emoji="👌" color="yellow"/>
      <Skill lang="Git and Github" emoji="🤝" color="orange"/>
      <Skill lang="React" emoji="👊" color="brown"/>
      <Skill lang="Svelte" emoji="🖐" color="green"/>
    </div>
  )
}

function Skill(props){
  return (
    <div className='skill' style={{background:props.color}}>
      <span>{props.lang}</span>
      <span>{props.emoji}</span>
    </div>
  )
}


export default App