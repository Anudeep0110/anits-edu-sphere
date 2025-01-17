import React from 'react'

const GlobalSearch = ( {onEnter} ) => {

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnter(event.target.value);
    }
  };



    const [input,setInput] = React.useState('')
  return (
    <div className='flex w-screen flex-col bg-slate-100 justify-center items-center py-12'>
            <p className=' font-bold text-2xl md:text-3xl uppercase'>Place your query here</p>
            <input className='border border-black rounded w-[90%] md:w-[50%] font-bold py-3 px-2 placeholder:text-slate-500 placeholder:font-semibold text-2xl' type='text' onChange={(e) => setInput(e.target.value)} placeholder='Enter Name or Reg no.' onKeyPress={handleKeyPress}></input>
    </div>
  )
}

export default GlobalSearch
