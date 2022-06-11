import React from 'react'

import board from '../assets/images/board.jpeg'

const GiftCard = (props) => {
  const {bookname, description} = props;
  return (
    <div className='gift'>
      <article className='gift-card'>
        <figure>
          <img src={board} alt="me-pictorio" />
        </figure>
        <div className="item-title">
          <h5>{bookname}</h5>
        </div>
        <div className="item-description">
          <p>{description}</p>
        </div>
      </article>
    </div>
  )
}

export default GiftCard