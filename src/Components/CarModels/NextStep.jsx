import React from 'react'
import car1 from '../../assets/book now.webp'
import car2 from'../../assets/find dealer.webp'
import car3 from '../../assets/contact-us-2.webp'
import { MdArrowOutward } from "react-icons/md"


let bookCar =[
    {image : car1,quote : "Book Now"},
    {image : car2, quote: "Find Dealer"},
    {image : car3, quote:"Contact Us"}
]

const NextStep = () => {
  return (
    <div className='w-full h-screen p-4 flex flex-col items-center justify-center gap-5'>
      <div className='text-5xl font-bold pb-5'>Next<span className="font-bold text-[#41AEC7]"> Steps</span></div>
      <div className='flex gap-10'>
        {bookCar.map(({ image, quote }, idx) => (
          <div key={idx} className='flex flex-col items-center gap-2'>
            <div className='w-90 h-100 p-4'>
              <div className='w-85 h-85 flex items-center justify-center'>
                <img src={image} alt={quote} />
              </div>
              <h5 className="font-bold text-xl mt-4 flex gap-1 items-center text-green-900">{quote} <MdArrowOutward/></h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NextStep