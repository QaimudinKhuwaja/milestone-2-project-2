import React from 'react'

const Jobs = () => {
  return (
   
   <div className="pt-[100px] pl-4  gap-40 font-semibold   ">
<div className="mt-5 flex flex-col gap-3 text-[14px] md:text-[15px]">
  <h1 className=" text-[25px] font-bold mb-3 text-blue-900">Core Courses</h1>
  <a href="">Programming Fundamentals</a>
  <a href="">Web2 NextJS</a>
  <a href="">Earn as You Learn</a>
</div>

<div className="mt-5 flex flex-col gap-3 text-[13px] md:text-[15px] ">
  <h1 className="text-blue-900 text-xl font-bold">Advanced Courses</h1>
  <a href="">Web 3and Metaverse</a>
  <a href="">Cloud-Native Computing</a>
  <a href="">Artifical Intelligence (AI) and Deep Learning</a>
  <a href="">Ambient Computing and IoT</a>
  <a href="">Genomics and Bioinformatics</a>
  <a href="">Network Programmability and Automation </a>
</div>
   </div>
   
  )
}

export default Jobs