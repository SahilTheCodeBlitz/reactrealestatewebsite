import React from 'react'
import './Footer.css'
import logo from '../../Components/public/logo2.png'

function Footer(){
    return(
        <section className='Footer'>
            <div className='ContainerFooter innerWidth paddings'>

                <div className='f-left flexColStart'>
                    {/* left side code */}

                    <img src={logo}  alt='logo'/>
                    <span className='secondaryText'>Our vision is to make all people<br/>
the best place to live for them.</span>
                    
                </div>

                <div className='f-right flexColStart'>
                    {/*right side code */}
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 5467, USA</span>
                    <span className='ftext'><pre>Property    Services      Product       About Us</pre></span>
                </div>

            </div>
        </section>
    )
}

export default Footer