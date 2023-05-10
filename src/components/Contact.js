import React, { memo } from 'react'


import devices from '../images/hero-devices.svg'

const Contact = memo(() => {
    return (
        <>
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered" id="contact">Contact</h1>

            <section className="mx-5" style={{ boxShadow: "2px 3px 10px 1px #D3d3d3", background: "#141c3a", color: "white", borderRadius: "20px", marginTop: "50px" }} >
                <div className="is-narrow">

                    <div className="columns">
                        <div className="column mx-5 my-5" style={{ borderRadius: "0px", boxShadow: "10px", }}>
                            <img className="is-bottom" src={devices} />
                        </div>

                        <div className="column " >
                            <p className='fw-normal fs-4 my-5 mx-5'>
                                <a className="button mx-5" style={{ background: "#7510f7", borderRadius: "20px" }}><span className="icon"><i className="fa-solid fa-user" style={{ color: "white" }}></i></span></a>
                                NUMAN AFZAL
                            </p>
                            <p className='fw-normal fs-4 my-5 mx-5'>
                                <a className="button mx-5" style={{ background: "#7510f7", borderRadius: "20px" }} href="mailto:info@numanshykh@gmail.com" target="_blank"><span className="icon"><i class="fa-solid fa-envelope" style={{ color: "white" }}></i></span></a>
                                numanshykh@gmail.com
                            </p>
                            <p className='fw-normal fs-4 my-5 mx-5 '>
                                <a className="button mx-5" style={{ background: "#7510f7", borderRadius: "20px" }} href="tel://+923061684555" target="_blank"><span className="icon"><i class="fa-solid fa-phone" style={{ color: "white" }}></i></span></a>
                                +92 3061684555
                            </p>

                            <p className='fw-normal fs-4 my-5 mx-5 '>
                                <a className="button mx-5 " style={{ background: "#7510f7", borderRadius: "20px" }} target="_blank"><span className="icon" ><i class="fa-solid fa-location-dot" style={{ color: "white" }}></i></span></a>
                                203 RB Manawala, Faisalabad, <p className='has-text-centered'>  Near Dr. Younas Clinic</p>
                            </p>



                        </div>
                    </div>
                </div>
            </section >
        </>
    )
})

export default Contact