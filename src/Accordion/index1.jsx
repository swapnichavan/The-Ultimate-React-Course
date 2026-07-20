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
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          num={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        key={22}
        title={'Hyeee'}
        num={22}
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        {'Hyee yoooo'}
      </AccordionItem>
    </div>
  )
}

function AccordionItem({ title, num, curOpen, onOpen, children }) {
  const isOpen = num === curOpen

  const onHandleOpenItem = () => {
    onOpen(isOpen ? null : num)
  }
  return (
    <>
      <div
        className={`item ${isOpen ? 'open' : ''}`}
        key={num + 1}
        onClick={onHandleOpenItem}
      >
        <p className="number">{num >= 0 && `0${num + 1}`}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? '+' : '-'}</p>
        {isOpen ? <div className="content-box">{children}</div> : null}
      </div>
    </>
  )
}

export default App
