import React from 'react'

const Formdescript = ({describe, title}) => {
  return (
    <>
    <div className='fixed right-0 bottom-0 h-full flex justify-center flex-col items-center lg:px-12 md:px-0
            overflow-y-hidden w-0 lg:w-1/2 text-white font-semibold
            rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none' 
            style={{ 
                background: 'linear-gradient(to right, #183d67, #000)',
            }}>
            <h4 className="mb-6 text-3xl font-bold">
            {title}
            </h4>
            <p className="text-md text-justify">
                {describe}
            </p>
        </div>
    </>
  )
}

export default Formdescript