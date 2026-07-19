import React, { useState } from 'react'
import './travalList.css'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false }
]

function App() {
  const [items, setItems] = useState([])
  // const numItems = items.length

  const onHandleAddItem = (item) => {
    setItems((items) => [...items, item])
  }

  const onHandleDeleteItem = (id) => {
    console.log(id)
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const onHandleToggle = (id) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed }
        } else {
          return item
        }
      })
    )
  }

  const onHandleClearList = () => {
    setItems([])
  }

  return (
    <div>
      <Logo />
      <Form onAddItem={onHandleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={onHandleDeleteItem}
        onToggle={onHandleToggle}
        onClearList={onHandleClearList}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
