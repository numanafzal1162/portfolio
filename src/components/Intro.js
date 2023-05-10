import React, { memo } from 'react'
import avatar from '../images/numanAvatar.png'

const Intro = memo(() => {
    return (
        <>
            <section className="mx-5 my-5" >
                <div className="is-narrow">
                    <div className="container has-text-centered">
                        <div className="column">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile"> <span className='fw-normal'>Hy, I am  </span> <span className="name fw-normal"> NUMAN</span> <br />  Professional Frontend &amp; ReactJS <br /> Web Developer</h1>
                            <div className="column " >
                                <img className="avatar  mx-5" src={avatar} height={380} width={380} />
                                <h2 className="subtitle is-size-4-tablet my-5" >I design and code beautifully simple things, and I love what I do.</h2>
                                <a className="button is-primary is-outlined is-rounded has-text-weight-normal fs-4 my-2" style={{ marginTop: "-10px" }} href='#sayHello'>Hire Me </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
})

export default Intro