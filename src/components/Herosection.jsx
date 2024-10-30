import React from 'react'

export default function Herosection() {
  return (
    <div className='flex justify-center gap-10 mt-20'>
        <div>
            <h1 className='text-[38px] font-bold '>Hi, I'm Paul, <br/> Creative Technologist</h1>
            <p className='mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non asperiores doloremque culpa dolore <br />reprehenderit? Deleniti assumenda perspiciatis quasi, repellendus delectus quod quisquam <br />iusto voluptates sequi nihil minima rem id sint.
            </p>

            <button className='bg-red-500 p-3 mt-4 text-white hover:bg-red-600'>Download Resume</button>
        </div>
      <div>
        <img src="public/images/asap1.jpg" alt="photo" className='w-60 h-60 rounded-full'/>
      </div>
    </div>
  )
}
