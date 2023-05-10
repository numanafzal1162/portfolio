import React, { memo } from 'react'

const Skills = memo(() => {
    return (
        <>
            <section className="section skills has-text-centered">
                <div className="container is-narrow">
                    <div className="box">
                        <div className="content">
                            <div className="columns is-centered">

                                <div className="column"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fa-square-terminal fa-stack-1x has-text-dark"></i></span>
                                    <h1 className="title is-size-4 is-spaced">ReactJS Developer</h1>
                                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                    <p className="list-title has-text-primary has-text-weight-normal">Skills:</p>
                                    <p>HTML, CSS, Bootstrap, React, JavaScript, Git, SQL, Database</p>
                                    <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                                    <ul>
                                        <li>Visual Studio Code</li>
                                        <li>Oracle</li>
                                        <li>Firebase</li>
                                        <li>MongoDB</li>
                                        <li>Notepad++</li>
                                        <li>Android Studio</li>

                                    </ul>
                                </div>



                                <div className="column"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fa-layer-plus fa-stack-1x has-text-dark"></i></span>
                                    <h1 className="title is-size-4 is-spaced">Website Design</h1>
                                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                                    <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy designing:</p>
                                    <p>UX, UI, Web, Apps</p>
                                    <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
                                    <ul>

                                        <li>Figma</li>
                                        <li>Font Awesome</li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
})

export default Skills