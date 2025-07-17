
import React from 'react'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({ picture, video }) => {
  // Use absolute positioning and negative z-index to ensure background is behind hero
  const baseClass = "w-full h-screen object-cover absolute top-0 left-0 z-[-10]";
  if (video) {
    return (
      <video className={baseClass} autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (picture === 0) {
    return <img src={image1} className={baseClass} alt="" />;
  } else if (picture === 1) {
    return <img src={image2} className={baseClass} alt="" />;
  } else if (picture === 2) {
    return <img src={image3} className={baseClass} alt="" />;
  } else {
    return null;
  }
}

export default Background