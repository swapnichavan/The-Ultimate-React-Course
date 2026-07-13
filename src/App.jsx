import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Pizza.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {

  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  )
}

function Header(){
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu(){
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
      name="Pizza"
      ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      image="/pizzas/spinaci.jpg"
      price={10}
      />
      <Pizza
      name="Pizza Funghi"
      ingredients="Tomato, mushrooms"
      image="/pizzas/funghi.jpg"
      price={12}
      />
    </main>
  )
}

function Pizza(props){
  console.log(props)
  return (
  <div className='pizza'>
    <img src={props.image} alt="pizza"/>
    <div>
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <p>{props.price}</p>
    </div>
  </div>)
}

function Footer(){
  const hour=new Date().getHours().toLocaleString()
  const openHour=9
  const closedHour=23
  const isOpened=hour>=openHour && hour<closedHour
  console.log(isOpened)

  // if(hour>=openHour && hour<closedHour){
  //   alert("we are open")
  // }else{
  //   alert("we are closed")
  // }

  console.log(hour)
  return <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open.</footer>
}



export default App
