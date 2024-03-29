import React, { useEffect, useState } from "react";
import SliderContent from "./SlideContent";
import Dots from "./Dots";
import Arrows from "./Arrow";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1;

function Slider (props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='slider-container' id='slider'>
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
            <Arrows
            prevSlide={() => 
            setActiveIndex(activeIndex < 1 ? len : activeIndex -1)
            }
            nextSlide={() => 
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
            />
            <Dots
            activeIndex={activeIndex}
            sliderImage={sliderImage}
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Slider;