import React from 'react'

export default function () {
  return (
    <div className='flex justify-center space-x-72 pt-6 bg-gray-50 w-1152 h-595'>

        <div className='font-sans text-[20px] font-light'>Recent posts <br />
        <div className=' bg-white'>
            <h3 className='w-129 h-60 font-semibold text-2xl '>Making a design system from <br /> scratch <br />
            <p className='font-extralight text-[17px] pt-4'>12 Feb 2020 <span style={{marginLeft: '20px'}}>| &nbsp; &nbsp; Design, Pattern</span></p>
            <p className='flex justify-center text-[17px] font-light pt-2 leading-7'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Beatae quas sunt assumenda <br />cupiditate unde repellendus ex inventore, <br /> delectus non et hic.</p>
            </h3>
           
        </div>
        </div>

        <div>
          <button className='font-sans text-[15px] text-blue-500'>View all <br />
          </button>
          <div className='bg-white'>
            <h3 className='w-129 h-60 font-semibold text-2xl mb-4'>Creating pixel perfect icons in <br /> Figma <br />
            <p className='font-extralight text-[17px] pt-4'>12 Feb 2020 <span style={{marginLeft: '20px'}}>| &nbsp; &nbsp; Figma, Icon Design</span></p>
            <p className='  text-[17px] font-light pt-2 leading-7'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Beatae quas sunt assumenda <br />cupiditate unde repellendus ex inventore, <br /> delectus non et hic.</p>
            </h3>
        </div>
        </div>
    </div>
  )
}