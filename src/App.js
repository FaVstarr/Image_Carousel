import React from 'react';
import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import './index.css';



function App(){

    const images = [
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ];

    const [current, setCurrent] = useState(0);

    function nextSlide(){
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide(){
      setCurrent(current === 0? images.length - 1 : current - 1);
    }

    return(
      <div className="App">
        <h2>Image Carousel</h2>
        <div className='slider'>
          <div className='left-arrow' onClick={prevSlide}>
          <ArrowLeftIcon className="h-6 w-6 text-gray-500" />

          </div>
          <div className='right-arrow' onClick={nextSlide}>
          <ArrowRightIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
        {images.map(
            (image, index) => (
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt={image} />
              </div>
            
            ))
          )}
      </div>
    )



}

export default App;