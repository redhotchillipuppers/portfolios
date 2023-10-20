import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                key={index}
                className={index === activeIndex ? 'slides active' : 'inactive'}
                >
                    <h2 className="slide-title">{slide.title}</h2>
                    <img className="slide-image" src={slide.urls} alt="" />
                    
                    <h3 className="slide-text">{slide.description}</h3>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
