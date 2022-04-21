import React from 'react'
import data from './data.js'

function shuffleData(data) {
  let currentIndex = data.length
  let randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [data[currentIndex], data[randomIndex]] = [data[randomIndex], data[currentIndex]]
  }
  return data
}

const Form = ({count, setCount, setParagraphes}) => {   
     
    
    const handleSubmit = (event) => {
        event.preventDefault()
        shuffleData(data)
        setParagraphes(data.slice(0, count))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="number">Paragraphs: </label>
            <select
                type="number"
                name="number"
                id="number"
                value={count}                
                onChange={(event) => setCount(event.target.value)}
            >                
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <button type='submit'>Generate</button>
        </form>
    )
}

export default Form