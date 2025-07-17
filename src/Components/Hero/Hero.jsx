import React from 'react'
import pause from '../../assets/pause_icon.png'
import play from '../../assets/play_icon.png'
import arrow from '../../assets/arrow_btn.png'

const Hero = ({ picture, text, video, setPicture, setVideo }) => {
  return (
    <div className="relative z-10 flex flex-col justify-center h-screen text-white px-10">
      {/* Headings */}
      <div className="mb-8 ">
        <h2 className="text-8xl font-bold mb-2 drop-shadow-lg">{text.text1}</h2>
        <h2 className="text-8xl font-semibold text-orange-400 drop-shadow-lg">{text.text2}</h2>
      </div>

      {/* Explore Features Button */}
      <div className="flex justify-between items-center gap-3 mb-10 cursor-pointer group opacity-90 bg-white text-black px-3 py-2 rounded-2xl w-70">
        <p className="text-lg font-medium group-hover:text-blue-400 opacity-60 transition-colors">Explore The Features</p>
        <img src={arrow} alt="" className="w-8 h-8 group-hover:translate-x-2 ease-in transition-transform" />
      </div>

      {/* Dots Navigation */}
      <div className="mb-10">
        <ul className="flex gap-4">
          {[0,1,2].map((idx) => (
            <li key={idx} onClick={() => setPicture(idx)}
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 cursor-pointer text-sm font-bold transition-all
                ${picture === idx ? "bg-orange-400 border-orange-400 text-white scale-110 shadow-lg" : "bg-white/20 border-white text-white hover:bg-orange-300 hover:border-orange-400 hover:text-white"}`}>
             {idx + 1}
            </li>
          ))}
        </ul>  
      </div>

      {/* Video Toggle */}
      <div className="flex items-center gap-2 absolute bottom-7 right-[15vh]">
        <button
          onClick={() => setVideo(!video)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-orange-400 transition-colors shadow-sm">
          <img src={video ? pause : play} alt="" className="w-8 h-8" />
        </button>
        <p className="text-base font-medium">See the video</p>
      </div>
    </div>
  );
}

export default Hero