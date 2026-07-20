import React, { useState } from 'react'
import './accordion.css'

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.'
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.'
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!'
  }
]

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  )
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      <AccordionItem data={data}></AccordionItem>
    </div>
  )
}

function AccordionItem({ data }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  console.log(selected)

  const onHandleOpenItem = (id) => {
    setSelected(id)
    if (selected === id) {
      setOpen((open) => !open)
    } else {
      setOpen(true)
    }
    // setOpen(!open)
  }
  return (
    <>
      {data.map((item, index) => (
        <div
          className={`item ${open && selected == index ? 'open' : ''}`}
          key={index + 1}
          onClick={() => onHandleOpenItem(index)}
        >
          <p className="number">{index >= 0 && `0${index + 1}`}</p>
          <p className="title">{item.title}</p>
          <p className="icon">{open && selected === index ? '+' : '-'}</p>
          {open && selected === index ? (
            <div className="content-box">{item.text}</div>
          ) : null}
        </div>
      ))}
    </>
  )
}

export default App
