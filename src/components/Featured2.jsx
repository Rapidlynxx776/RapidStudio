import React from 'react'

export default function Featured2() {
  return (
    <div className='flex justify-center flex-row gap-4 mt-10'>
        <div>
            <img src="/public/images/stylist.JPG" alt="pics" />
        </div>
        <div>
            <h1 className='text-[25px] font-bold '>Vibrant Portraits of 2020</h1>
            <button className='font-semibold text-white bg-indigo-950 rounded-xl p-1 w-42 h-6 px-2 leading-3'>2018</button> &nbsp; &nbsp; &nbsp; <h3 className='font-light text-gray-400 text-[18px]'>Illustration </h3>
            <p className='w-594 h-93'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Inventore rerum tempora dignissimos enim, qui saepe <br /> facilis dolorum tempore eum modi eligendi ut provident,<br /> explicabo cum ducimus consequatur optio hic natus?</p>
        </div>

<br />
<hr className='my-4' /></div>
  )
}