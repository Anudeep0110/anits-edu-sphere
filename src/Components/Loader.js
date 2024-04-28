import React from 'react'
import {DNA} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='min-h-screen flex bg-slate-100 justify-center items-center'>
      <DNA
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
    </div>
  )
}

export default Loader