import React from "react";
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
// for making carousel in react we are using very famous Swiper library
// React carousel is a slideshow component for cycling through elements—images or slides of text—like a carousel.

import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import  {sliderSettings} from '../../utils/common'
// this are props for slider

// slider.json contains display data name,price,image in java script object notation form

function Residencies() {
    return (
        <section className="r-wrapper">
            <div className="r-container paddings innerWidth">
                
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>

                {/* lets make carousel using swiper */}
                <Swiper {...sliderSettings}>
                <SliderButtons />
                    {/* destructiong slider setting to act like prop uisng ... */}
                    {/* making swiper component */}
                    {
                        data.map((card,i)=>(
                            <SwiperSlide key={i}>
                                {/* this is actual swiper class where we have to write i.e design the card */}
                                <div className="r-card flexColStart">
                                    <img src={card.image} alt="" />
                                    <span className="r-price secondaryText ">
                                        <span className="orangeText">$</span><span>{card.price}</span>
                                    </span> 

                                    <span className="primaryText name">{card.name}</span>
                                    <span className="secondaryText desc">{card.detail}</span>

                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    );
  }
  
  export default Residencies;

  const SliderButtons = ()=>{
    const swiper = useSwiper()
    // this hook gives instance of swippere
    return (
        <div className="r-buttons flexCentered">
            
            <button onClick={()=>
                swiper.slidePrev()
            }>&lt;</button>

            <button onClick={()=>
                swiper.slideNext()
            }>&gt;</button>

        </div>

    );
  }
  