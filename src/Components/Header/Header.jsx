import React, { useState } from "react";
import './Header.css'
import logo from './assets/logo.png'



function Header() {
    // lets handle the logic for menu open and close
    const[menuVisible,setMenuVisible] = useState(false)

    const toggleMenu = ()=>{
        // creating this function just to change current value 
        // if true value will be changed to false
        // if flase value will be changed to true 
        setMenuVisible(!menuVisible)
    }



    return (
        <section className="h-wrapper">

            <div className="h-container flexCenter paddings innerWidth">

            <img src={logo} alt="logo" width={100} />

                

                <div className="h-menu flexCenter"  style={{ display: menuVisible ? 'flex' : 'none' }}>
                    <a href="">Residencies </a>
                    <a href="">Our Value </a>
                    <a href="">Contact Us </a>
                    <a href="">Get Started </a>

                    <button className="button">
                        <a href="">Contact</a>
                    </button>

                   

                </div>

                <div className="h-icons" onClick={()=>{
                    toggleMenu()
                    let maxWidth = window.innerWidth;
                    if(maxWidth<=800){
                        if(menuVisible){

                            setMenuVisible(false)
        
                        }
                    }
                    else{
                        setMenuVisible(true)
                    }
                   
                   
                   
                }}>
                . . .
            </div>



               


            </div>
        
         

           

        </section>
    );
}

export default Header;
