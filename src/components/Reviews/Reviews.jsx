import React from 'react'
import ReviewsCardDetails from './ReviewsCardDetails'
import ReviewsCard from './ReviewCard'

function Reviews() {
  return (
    <>
      <div className="reviews-container w-full flex flex-col justify-center items-center  ">
        <div className="heading ">
        <h2 className='uppercase text- text-center tracking-wider '>Voices of Satisfaction</h2>
        <h1 className='uppercase text-4xl font-medium '>Customer reviews</h1>
        </div>

        <ReviewsCard />
      </div>
    </>
  )
}

export default Reviews
