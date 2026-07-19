function Stats({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <em>Start adding some items to your packing list</em>
      </div>
    )
  }

  const numItems = items.length
  const packedItems = items.filter((item) => item.packed).length
  const percentage = Math.round((packedItems / numItems) * 100)
  console.log(percentage)

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything ready to go ✈`
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  )
}

export default Stats
