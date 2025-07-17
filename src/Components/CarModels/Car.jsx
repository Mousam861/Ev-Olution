import React from 'react'
import car1 from '../../assets/virtus-chrome.webp'
import car2 from '../../assets/taigun-sport.webp'
import car3 from '../../assets/golf-gti.webp'
import car4 from '../../assets/tiguan-r-line.webp'
let carModel = [
    {image : car1,name: "Virtus-Chrome",price : "15,00,000"},
    {image : car2, name : "Taigun-Sport", price : "25,00,000"},
    {image : car3, name : "Golf-Gti", price : "8,00,000"},
    {image: car4, name : "Tiguan-r-Line", price: "45,00,000"}
]
const Car = () => {
  return (
    <div className='w-full h-screen p-4 flex flex-col items-center justify-center gap-5'>
      <div className='text-5xl font-bold pb-10'>Choose your Vehicle</div>
      <div className='flex gap-10'>
        {carModel.map(({ image, name, price }, idx) => (
          <div key={idx} className='flex flex-col items-center gap-2'>
            <div className='w-80 h-100 p-4'>
              <div className='w-80 h-85 bg-amber-50 flex items-center justify-center'>
                <img src={image} alt={name} />
              </div>
              <h3 className='text-2xl font-bold'>{name}</h3>
              <h5>Price Starting From <span className="font-bold">${price}</span></h5>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}

export default Car