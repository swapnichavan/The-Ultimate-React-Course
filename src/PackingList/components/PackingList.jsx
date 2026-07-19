import React, { useState } from 'react'
import Item from './Item'

function PackingList({ items, onDeleteItem, onToggle, onClearList }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems
  console.log(sortedItems)

  if (sortBy === 'input') sortedItems = items

  if (sortBy === 'description')
    sortedItems = items.slice().sort((a, b) => {
      if (a.description > b.description) {
        return 1
      } else if (b.description > a.description) {
        return -1
      } else {
        return 0
      }
    })
  // .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === 'status')
    sortedItems = items.sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggle={onToggle}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="status">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  )
}

export default PackingList
