import PropTypes from 'prop-types'
import React, { memo } from 'react'

const Navbar = memo((props) => {
    return (
        <>
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item fs-2" href="/">NUMAN AFZAL
                            <span className='dot'></span>
                        </a>
                        <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className="navbar-menu is-shadowless" id="navMenu">
                        <div className="navbar-start">
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <a className="navbar-item has-text-weight-normal" href="#about">About</a>
                                    <a className="navbar-item has-text-weight-normal" href="#contact">Contact</a>
                                    <a className="button is-primary is-outlined is-rounded has-text-weight-normal" href='#sayHello'>Say Hello </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
})

Navbar.propTypes = {}

export default Navbar