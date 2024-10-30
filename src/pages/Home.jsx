import React from 'react'
import Recent from '../components/Recent'
import Featured from '../components/Featured'
import Featured2 from '../components/Featured2'
import Featured3 from '../components/Featured3'
import Herosection from '../components/heroSECTION'

export default function Home() {
  return (
    <div>
      <Herosection/>
      <Recent/>
      <Featured/>
      <Featured2/>
      <Featured3/>
    </div>
  )
}
