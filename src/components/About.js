import React, { memo } from 'react'

const About = memo(() => {
    return (
        <>
            <div section className="section  is-primary has-text-centered is-long" id="about">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">About Myself</h1>
                            <h2 className="subtitle is-size-5-desktop has-text-weight-normal"> "I am a Bachelor's degree holder in Information Technology and have expertise in web development, database management, and system administration. I have a passion for exploring new and emerging technologies, particularly groundbreaking advancements in Artificial Intelligence. I value dedication and hard work both in my personal and professional life. Join me on the journey to experience cutting-edge technology and innovative solutions."</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default About