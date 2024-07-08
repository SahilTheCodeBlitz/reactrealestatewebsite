import React from "react";
import './Value.css'
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,
AccordionItemPanel,AccordionItemState} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
//import MDOutlineArrow from 'react-icons/md' 
// importing the down arrow image
import Imagesss from '../public/value.png'
import data from '../../utils/accordion' 
// importing data in the form of objects for accordion section 


function Value(){
    return (
        <section className="v-wrapper">
            <div className="v-container paddings innerWidth flexCenter">

                {/* left section code */}
                <div className="v-left">
                    <div className="image-Container">
                        <img src={Imagesss} alt="img"></img> 
                    </div>
                </div>

                {/* right section code */}
                <div className="v-right flexColStart">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Values We Give to You</span>
                    <span className="secondaryText">We always ready to help by providijng the best services for you.<br />
We beleive a good blace to live can make your life better</span>

                {/* Accordion section making */}
                <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >

                    {
                        data.map((item,i)=>{
                            return(
                               <AccordionItem className="accordionitem" key={i} uuid={i}>

                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <span className="flexCenter icon ">{item.icon}</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>   

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>

                                </AccordionItemPanel>     
                               </AccordionItem> 
                            )

                        })
                    }


                    

                </Accordion>
                </div>


            </div>
        </section>
    )
}

export default Value;