import React, { memo } from 'react'
import NTU from '../images/NTU.png'
import mtm from '../images/mtm.png'


const Experience = memo(() => {
    return (
        <>
            <section className="section projects  is-white has-text-centered" style={{ paddingBottom: "20px" }}>
                <div className="container is-narrow">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">My Experience</h1>
                    <div className="project-grid">
                        <div className="columns is-multiline is-mobile is-centered">
                            <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                                <figure className="image is-3by2" style={{ boxShadow: "1px 2px 10px 1px #D3d3d3" }}>
                                    <img className="project-thumb" src={NTU} />
                                    <figcaption>
                                        <h1 className="title is-size-5 is-size-4-widescreen">
                                            {/* <span className="title is-size-5 is-size-4-widescreen" style={{ color: "white", border: "2px solid #7510f7", padding: "5px 10px", borderRadius: "20px" }}>Oct-2022 to Jan-2023</span>   */}
                                            <br /> Served as a Teacher Assistant in the Web Development course at National Textile University</h1>

                                    </figcaption>
                                    <div className="overlay"></div>
                                </figure>
                            </div>
                            <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                                <figure className="image is-3by2" style={{ boxShadow: "1px 2px 10px 1px #D3d3d3" }}>
                                    <img className="project-thumb" src={mtm} />
                                    <figcaption>
                                        <h1 className="title is-size-5 is-size-4-widescreen"> <br /> Worked as an Oracle Developer at Masood Textile Mills, where I got trained in SQL, Oracle Database, Forms, and Reports</h1>

                                    </figcaption>
                                    <div className="overlay"></div>
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>
            </section >

        </>
    )
})

export default Experience