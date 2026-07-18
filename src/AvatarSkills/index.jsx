import React from 'react'
import "../src/Avatar/style.css"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


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
      {
        skills.map((skill)=>(
          <Skill key={skill.skill} skill={skill}/>
        ))
      }

      {/* <Skill lang="HTML+CSS" emoji="🙂" color="#123456"/>
      <Skill lang="JavaScript" emoji="🤟" color="orangered"/>
      <Skill lang="Web Design" emoji="👌" color="yellow"/>
      <Skill lang="Git and Github" emoji="🤝" color="orange"/>
      <Skill lang="React" emoji="👊" color="brown"/>
      <Skill lang="Svelte" emoji="🖐" color="green"/> */}
    </div>
  )
}

function Skill({skill}){
  return (
    <div className='skill' style={{background:skill.color}}>
      <span>{skill.skill}</span>
      <span>{skill.level === "beginner" && "🖐"}</span>
      <span>{skill.level === "advanced" && "👊"}</span>
      <span>{skill.level === "intermediate" && "🤞"}</span>
    </div>
  )
}


export default Appimport React from 'react';
