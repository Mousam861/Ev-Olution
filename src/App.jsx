import React, { use, useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

export const App = () => {

  let text = [
    {text1 : "Start Your", text2 : "Journey"},
    {text1 : "Explore", text2 : "New Destinations"},
    {text1 : "Experience a", text2 : "Smooth Ride"}
  ]

  const [picture,setPicture] = useState(0)
  const [video,setVideo] = useState(false)
   {/* Transition delay in changing hero picture after 5 sec */}
  useEffect(()=>{
    setInterval(()=>{
      setPicture((count)=> count===2?0:count+1)
    },5000)
  },[])

  return (
    <div>
      <Navbar />
      <Background picture={picture} video={video} />
      <Hero picture={picture} text={text[picture]} video={video} setPicture={setPicture} setVideo={setVideo}/>
    </div>
  )
}

export default App