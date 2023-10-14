import React from 'react'

const Input = ({label,placeholder,type,isDisable}) => {
  return (
    <div className='w-[70%] flex flex-col gap-3'>
        <label className='ps-1 text-md font-semibold text-black block'>{label}</label>
        <input type={type} placeholder={placeholder} disabled={isDisable} className='w-full text-md border h-10 px-2 border-black rounded-md '></input>
    </div>
  )
}

export default Input 