import './App.css'
import '../src/Pizza/Pizza.css'

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
  const pizzas=pizzaData
  // const pizzas=[]
  const numPizzas=pizzas.length
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {
        numPizzas>0 ? (
        <>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, corrupti rerum eveniet deserunt impedit odio nisi cum amet, eligendi officiis ullam alias modi ducimus ipsam reiciendis! Iure cumque maiores repellendus!</p>
        <ul className='pizzas'>
      {
        pizzas.map((pizza)=>(
          <Pizza pizza={pizza} key={pizza.name}/>
        ))
      }
      </ul>
      </>
      ):<p>We are still working on our menu. Please come back later :)</p>
      }

      {/* {
        numPizzas >0 && (<ul className='pizzas'>
      {
        pizzas.map((pizza)=>(
          <Pizza pizza={pizza} key={pizza.name}/>
        ))
      }
      </ul>)
      } */}
      {/* <Pizza
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
      /> */}
    </main>
  )
}

function Pizza({pizza}){
  console.log(pizza)

  // if(pizza.soldOut) return null

  return (
  <li className={`pizza ${pizza.soldOut? "sold-out":""}`}>
    <img src={pizza.photoName} alt="pizza"/>
    <div>
    <h3>{pizza.name}</h3>
    <p>{pizza.ingredients}</p>
    <span>{pizza.soldOut ? "SOLD OUT" :pizza.price}</span>
    </div>
  </li>)
}

function Footer(){
  const hour=new Date().getHours().toLocaleString()
  const openHour=1
  const closedHour=23
  const isOpened=hour>=openHour && hour<closedHour
  console.log(isOpened)

  // if(hour>=openHour && hour<closedHour){
  //   alert("we are open")
  // }else{
  //   alert("we are closed")
  // }

  console.log(hour)
  return <footer className='footer'>
    {isOpened ? 
    (<Order openHour={openHour} closedHour={closedHour}/>):(<p>we are welcome you between {openHour}:00 and {closedHour}:00</p>)
    }
    {/* {isOpened && 
    <div className='order'>
    <p>We're open until {closedHour}:00. Come visit us or order online.</p>
    <button className='btn'>Order</button>
    </div>
    } */}
    {/* {new Date().toLocaleTimeString()}. We're currently open. */}
    </footer>
}

function Order({closedHour,openHour}){
    return (
    <div className='order'>
    <p>We're open from {openHour}:00 to {closedHour}:00. Come visit us or order online.</p>
    <button className='btn'>Order</button>
    </div>
    )
}


export default App
