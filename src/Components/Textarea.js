import React from 'react';

const Textarea = ({ label, placeholder,name,onChange }) => {

  return (
    <>
      <div className='w-[70%] flex flex-col gap-3'>
        <label className='ps-1 text-md font-semibold text-black block'>{label}</label>
        <textarea
          type='text'
          required
          placeholder={placeholder}
          name={name}
          rows={5}
          onChange={onChange}
          className='w-full text-md border px-2 border-black rounded-md '
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
