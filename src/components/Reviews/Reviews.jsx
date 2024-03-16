import React from 'react'
import ReviewsCardDetails from './ReviewsCardDetails'
import ReviewsCard from './ReviewCard'

function Reviews() {
  return (
    <>
      <div className="reviews-container w-full h-[80vh] flex flex-col justify-center items-center overflow-hidden ">
        <div className="heading ">
        <h2 className='uppercase text- text-center tracking-wider max-[550px]:text-xs'>Voices of Satisfaction</h2>
        <h1 className='uppercase text-4xl font-medium mb-10 max-[550px]:text-2xl'>Customer reviews</h1>
        </div>

        <ReviewsCard />
      </div>
    </>
  )
}

export default Reviews
