import React from 'react'
import GiftCard from '../../components/GiftCard'
import Intro from '../../components/Intro'
import Subheading from '../../components/Subheading'
import { books } from '../../book'

const GiftIndex = () => {
  return (
    <section className='gift-section'>
      <Intro title="Giving is Living"/>
      <div className="gift-information">
        <p>I would like to thank you for visiting my site and  would I like to leave you some little information</p>
        <Subheading subheading="Books" />
      </div>
      <div className="gift-splitter">
        {
          books.map(book => {
            return <GiftCard
              bookname={book.bookName}
              description={book.description}
              imgPath={book.imgPath}
            />
          })
        }
      </div>
    </section>
  )
}

export default GiftIndex