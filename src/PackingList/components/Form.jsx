import React, { useState } from 'react'

function Form({ onAddItem }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  const onHandleSubmit = (e) => {
    e.preventDefault()
    // console.log(e)

    if (!description) return
    let newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now()
    }

    console.log(newItem)

    onAddItem(newItem)

    setDescription('')
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={onHandleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
