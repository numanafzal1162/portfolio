import React, { memo } from 'react'
import avatar from '../images/numanAvatar.png'
import facebook from '../images/facebook.png'

const Footer = memo(() => {
    return (
        <>
            <footer className="section is-primary is-small has-text-centered">
                <div className="container is-narrow">
                    <section class="is-white has-text-centered">
                        <div class="container">
                            <div class="columns is-centered">
                                <div class="column is-8">
                                    <a className="is-medium" href="/">
                                        <img class="avatar" src={avatar} height={"150px"} width={"150px"} style={{ border: "5px solid white", borderRadius: "90px" }} />
                                    </a>

                                    {/* <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">I’m excited to learn about your project. Ready to get started?</h1> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <a className="fs-1 fw-light has-text-white" href="/">NUMAN AFZAL</a> */}
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <h1 className="title is-size-4-touch has-text-weight-normal">Living, learning, &amp; leveling up one day at a time.</h1>
                        </div>
                    </div>
                    <div className="social-icons">
                        <p className="field">

                            <a className="button is-medium" href="https://www.facebook.com/numanshykh5/" target="_blank">

                                <i className="fa-brands fa-facebook-f fa-fw" style={{ "font-size": "1.5rem" }}></i>

                                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" style={{ color: "#6e07f3", }} /> */}
                            </a>
                            <a className=" button is-medium" href="https://www.instagram.com/numan_.afzal/" target="_blank"><span className="icon is-small"><i className="fab fa-instagram fa-fw" style={{ "font-size": "1.5rem" }}></i>
                            </span></a><a className="button is-medium" href="https://www.linkedin.com/in/numan-afzal" target="_blank"><span className="icon is-small"><i className="fab fa-linkedin-in fa-fw" style={{ "font-size": "1.5rem" }}></i>
                            </span></a>
                            <a className="button is-medium" href="mailto:numanshykh@gmail.com"><span className="icon is-small"><i className="far fa-envelope fa-fw" style={{ "font-size": "1.5rem" }}></i></span></a></p>
                    </div>

                    <div className="copyright"><span className="icon has-white-text"><i className="far fa-copyright"></i></span>2023 All rights reserved | NUMAN AFZAL</div>
                </div>
            </footer >

        </>
    )
})

export default Footer