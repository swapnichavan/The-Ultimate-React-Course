import React, { useState } from 'react'
import './eatnsplit.css'

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0
  }
]

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  const onHandleShowAddForm = () => {
    console.log('clicked')
    setShowAddForm(!showAddForm)
  }

  const onAddFriend = (friend) => {
    setFriends((friends) => friends.concat(friend))
    setShowAddForm(false)
  }

  const onHandleSelectFriend = (friend) => {
    console.log(friend)
    setSelectedFriend(selectedFriend?.id === friend.id ? null : friend)
    setShowAddForm(false)
  }

  const onHandleSplitBill = (value) => {
    console.log(value)

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    )

    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelected={onHandleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddForm && <FormAddFriend onAddFriend={onAddFriend} />}
        <Button onClick={onHandleShowAddForm}>
          {showAddForm ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={onHandleSplitBill}
        />
      )}
    </div>
  )
}

function FriendsList({ friends, onSelected, selectedFriend }) {
  return (
    <ul className="">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  )
}

function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p className="red">You and {friend.name} are even.</p>
      )}
      <Button onClick={() => onSelected(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  )
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  const onHandleSubmit = (e) => {
    e.preventDefault()

    let id = crypto.randomUUID()

    if (!name || !image) return

    let newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id
    }

    onAddFriend(newFriend)
    console.log(newFriend)
    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <form className="form-add-friend" onSubmit={onHandleSubmit}>
      <label>👭 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌄 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  )
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriend = bill ? bill - paidByUser : ''
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  const onHandleSubmit = (e) => {
    e.preventDefault()

    if (!bill || !paidByUser) return

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }

  return (
    <form className="form-split-bill" onSubmit={onHandleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name}'s Expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">User</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  )
}

export default App
