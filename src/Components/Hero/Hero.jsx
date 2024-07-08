import React from "react";
import './Hero.css'
import HeroImg from './assets/hero-image.png' 
import {HiLocationMarker} from 'react-icons/hi'
import {CountUp} from 'react-countup'


function Hero() {
  return (
    <section className='hero-wrapper'>
        <div className='hero-container flexCenter innerWidth paddings'>
            
            <div className='hero-left flexColStart'>
                             
                
                <div className="hero-title">
                <div className="orange-circle"></div>   
                <h1>Discover <br />Most Suitable<br/>Property</h1>
                </div>

                <div className="hero-description flexColStart">
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="hero-search flexCenter">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" className="sear"/>
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">


                    <div className="flexColStart stat">
                        
                         <span>
                          {/* <CountUp start="8000" end="9000" duration={4} /> */}
                            <span className="number">9000</span>  
                            <span className="plus">+</span>

                        </span>
                        <span className="desc">Premium Products</span>
                    </div>

                    <div className="flexColStart stat">
                        
                         <span>
                          {/* <CountUp start="8000" end="9000" duration={4} /> */}
                            <span className="number">2000</span>  
                            <span className="plus">+</span>

                        </span>
                        <span className="desc">Happy Customer</span>
                    </div>

                    <div className="flexColStart stat">
                        
                         <span>
                          {/* <CountUp start="8000" end="9000" duration={4} /> */}
                            <span className="number">50</span>  
                            <span className="plus">+</span>

                        </span>
                        <span className="desc">Awards Winning</span>
                    </div>

                </div>



            </div>

            <div className='hero-right'>
                <div className='image-Container'>
                    <img src={HeroImg} alt='heroimg'/>
                </div>

            </div>


        </div>
    </section>
  );
}

export default Hero;
