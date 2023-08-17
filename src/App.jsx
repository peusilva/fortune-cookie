import { useState } from 'react'
import './App.css'
import quoteList from './assets/quotes.js';
import colorList from './assets/colors.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const quoteIcon = <FontAwesomeIcon icon={faQuoteLeft} />

function App() {
  const [currentQuote, setQuote] = useState(Math.floor(Math.random()*quoteList.length))
  const [bgColor, setColor] = useState(colorList[Math.floor(Math.random()*colorList.length)])
  return (
    <>
      <h1>Fortune Cookie Widget</h1>
      <div id="quote-box" className="card" style={{backgroundColor: bgColor}}>
        <div id="text">
        <h2><span id="icon">{quoteIcon}</span> {quoteList[currentQuote].quote}</h2>
        </div>
        <div id="author">
        <p>{quoteList[currentQuote].author}</p>
        </div>
        
        <div className="actionButtons">
          <a 
          id="tweet-quote"
          className="twitter-share-button"
          target='_blank'
          rel="noreferrer"
           href={"https://twitter.com/intent/tweet?text=" + quoteList[currentQuote].quote 
           + " " + quoteList[currentQuote].author + "&hashtags=fortunecookie"}
          >
        <button>
        Tweet this quote!
        </button>
          </a>
        <button 
        id="new-quote"
        onClick={() => setQuote(Math.floor(Math.random()*quoteList.length))}
        onClickCapture={() => setColor(colorList[Math.floor(Math.random()*colorList.length)])}
        >
          New Quote
        </button>
        </div>
      </div>
      <p className="read-the-docs">
        by <a href="peusilva.github.io" rel="noreferrer" target="_blank">Pedro Silva</a>
      </p>
    </>
  )
}

export default App
