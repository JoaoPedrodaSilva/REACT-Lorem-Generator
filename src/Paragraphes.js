import React from 'react'
import Paragraph from './Paragraph.js'

const Paragraphes = ({paragraphes}) => {
  return (
    <article>
        {paragraphes.map((paragraph, index) => {
          return <Paragraph key={index} paragraph={paragraph} />
        })}
    </article>
  )
}

export default Paragraphes