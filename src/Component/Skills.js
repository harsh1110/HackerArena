import React from 'react'

import html from '../images/logo/html.png';
import css from '../images/logo/css.png';
import js from '../images/logo/js.png';
import java from '../images/logo/java.png';
import android from '../images/logo/android.png';
import xd from '../images/logo/xd.png';
import wordpress from '../images/logo/wordpress.png';
import react from '../images/logo/react.png';


export const Skills = () => {
    return (
        <>
            <section id="section-skills" className="section-padding">
                <div className="header container text-center">
                    <div className="row px-4">
                        <div className="col-md-12 text-center wow fadeInUp">
                            <div>
                                <h2 className="heading-title"><strong>S</strong>kills</h2>
                                <p>Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="main row">
                        <div className="left col">
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={html} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>html-5</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={css} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>css-3</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={js} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>java script</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={java} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>java</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right col">
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={android} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>android</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={wordpress} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>wordpress</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={react} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>react js</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                            <div className="sub row">
                                <div className="logo col">
                                    <img src={xd} alt="html" height="100" width="100" />
                                </div>
                                <div className="mid col-4"></div>
                                <div className="desc col-7 px-4 text-center">
                                    <h1>adobe xd</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur qui facere
                                        ratione facilis doloremque! Non voluptatum quaerat quibusdam adipisci culpa quam placeat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
