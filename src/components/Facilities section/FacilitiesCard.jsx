import React from 'react'


function FacilitiesCard({   fCardIcon, fCardTagline, fCardText  }) {
  return (
    <>
      <div className="card w-[25%] max-lg:w-[30%]  max-md:py-10 max-md:w-[40%] max-md:mb-10 h-96  flex flex-col justify-center items-center shadow-2xl max-[500px]:w-[80%] group hover:bg-[#DD3219] transition-all duration-100 ease-in-out max-md:h-auto">
            <div className="f-card-img">
                {fCardIcon}
            </div>

            <div className="f-card-tagline mt-2">
                <p className='font-semibold text-xl max-lg:text-lg group-hover:text-white'>{fCardTagline}</p>
            </div>

            <div className='w-14 h-[0.5px] mt-4  max-lg:mt-6 bg-black'></div><br />
            <div className='w-14 h-[0.5px] mt-[-18px] ml-10 max-lg:mt-[-10px] bg-black'></div>

            <div className="f-card-text w-[90%] max-md:w-[80%] text-center mt-6">
            <p className='text-sm max-lg:text-xs max-lg:mt-2 group-hover:text-white'>{fCardText}</p>
            </div>
      </div>
    </>
  )
}

export default FacilitiesCard
