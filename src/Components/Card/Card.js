import React from 'react'
import './Card.scss'

export default function Card({content}) {
  return (
    <div className="card">
        <h2>{content.title}</h2>
        {/* <hr /> */}
        <img src={content.img} alt={content.altImg} />
        <p>
          {content.txt}
        </p>
    </div>
  )
}
