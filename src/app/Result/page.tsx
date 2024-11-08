import React from 'react'

const Result = () => {
  return (
    <div>
      <h1 className='font-extrabold text-blue-900 md:text-[29px] text-[16px] pt-[100px] text-center'>Grand Entrance Exam Result</h1>



      <div className='place-items-center pt-[100px]'>

        <div className='flex flex-col'>
          <label className='pb-1' htmlFor="number">Registration Number *</label>
          <input className='md:w-[500px] w-[300px] h-[50px]  border-[1px] border-gray-300 hover:border-blue-600' type="number" placeholder='Registration Number *' />
        </div>
        <div className='flex flex-col mt-[30px]'>
          <label className='pb-1' htmlFor="number">CNIC or B-Form Number *</label>
          <input className='md:w-[500px] w-[300px] h-[50px]  border-[1px] border-gray-300 hover:border-blue-600' type="number" placeholder='CNIC or B-Form Number *' />
        
        </div>

        <button className=' bg-blue-900 h-[42px] w-[300px] md:w-[165px] text-center text-white mt-[40px] font-extrabold'>Get Result</button>

      </div>

    </div>
  )
}

export default Result