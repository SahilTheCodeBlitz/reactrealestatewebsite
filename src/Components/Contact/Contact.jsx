import React from 'react'
import './Contact.css'
import ContactImg from '../../Components/public/contact.jpg'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

function Contact() {
    return (
        <section className='c-wrapper'>
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className='c-left flexColStart'>
                    <div className='orangeText'>Our Contact Us </div>
                    <div className='primaryText'>Easy to contact us</div>
                    <div className='secondaryText'>We always ready to help by providing the best services for you. We beleive<br />a good blace to live can make your life better</div>

                    <div className='contactModes flexColStart'>
                        {/* four div under this
                    making two rows */}

                        {/* first row         */}
                        <div className='flexStart row'>

                            {/* first entire eleemtnt */}


                            <div className='flexColCenter mode'>
                                {/* first entire eleemtnt code starting */}

                                <div className='flexStart'>
                                    {/* icon ka div  */}
                                    <div className='flexCenter icon'>
                                        <MdCall size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>
                                            Call
                                        </span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>


                            {/* first row second element code */}

                            <div className='flexColCenter mode'>
                                {/* first entire eleemtnt code starting */}

                                <div className='flexStart'>
                                    {/* icon ka div  */}
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>
                                            Chat
                                        </span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>




                        </div>


                        {/* second row code  */}

                        {/* first row         */}
                        <div className='flexStart row'>

                            {/* first entire eleemtnt */}


                            <div className='flexColCenter mode'>
                                {/* first entire eleemtnt code starting */}

                                <div className='flexStart'>
                                    {/* icon ka div  */}
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>
                                            Video Call
                                        </span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>


                            {/* second row second element code */}

                            <div className='flexColCenter mode'>
                                {/* first entire eleemtnt code starting */}

                                <div className='flexStart'>
                                    {/* icon ka div  */}
                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>
                                            Message
                                        </span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>




                        </div>




                    </div>
                </div>
                <div className='c-right'>
                    <div className='image-Container'>
                        <img src={ContactImg} alt='image'></img>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact
