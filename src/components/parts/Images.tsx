import React, { useState } from 'react';
import './Carouse.css'

import info1 from '@/images/info1.jpg'
import info2 from '@/images/info2.jpg'
import info3 from '@/images/info3.jpg'


const Images: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlide = (n: number) => {
    const slides = document.querySelectorAll('.carousel-inner img');
    let newIndex = slideIndex + n;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setSlideIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <img src={info1} alt="Image 1" style={{ transform: `translateX(-${slideIndex * 100}%)` }} />
        <img src={info2} alt="Image 2" style={{ transform: `translateX(-${slideIndex * 100}%)` }} />
        <img src={info3} alt="Image 3" style={{ transform: `translateX(-${slideIndex * 100}%)` }} />
      </div>
      <button className="prev" onClick={() => moveSlide(-1)}>❮</button>
      <button className="next" onClick={() => moveSlide(1)}>❯</button>
    </div>
  );
};

export default Images;
