import React from 'react'
import portfo1 from '../images/projects/portfo1.jpg';
import portfo2 from '../images/projects/portfo2.jpg';
import calculator from '../images/projects/calcculator.jpg';
import invoice from '../images/projects/invoice.jpg';
import convertx from '../images/projects/conertx.jpg';
import wordcloud from '../images/projects/wordcloud.png';


export const Projects = () => {
    return (
        <>
            <section id="section-project">
                <div className="container">
                <div className="row px-4 ">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <div className="section-heading">
                            <h2 className="heading-title"><strong>P</strong>ojects</h2>
                            <p>Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. </p>
                        </div>
                    </div>
                </div>
                    <div className="first row">
                        <div className="left col">
                            <div className="mx-4 my-4 text-center">
                                <div className="card">
                                    <img src={portfo1} className="card-img-top" alt="..." width="550px"
                                        height="300px" />
                                    <div className="card-body">
                                        <h5 className="card-title">Portfolio Using HTML/CSS</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the
                                            bulk
                                            of the
                                            card's content.</p>
                                        <a href="#" className="btn"><span>E</span>xplore <span>M</span>ore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right col">
                            <div className="mx-4 my-4 text-center">
                                <div className="card">
                                    <img src={portfo2} className="card-img-top" alt="..." width="550px"
                                        height="300px" />
                                    <div className="card-body">
                                        <h5 className="card-title">Portfolio Using React-JS</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the
                                            bulk
                                            of the
                                            card's content.</p>
                                        <a href="#" className="btn"><span>E</span>xplore <span>M</span>ore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second row">
                        <div className="left col">
                            <div className="mx-4 my-4 text-center">
                                <div className="card">
                                    <img src={calculator} className="card-img-top" alt="..." width="550px"
                                        height="300px" />
                                    <div className="card-body">
                                        <h5 className="card-title">calculator Using Python</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the
                                            bulk
                                            of the
                                            card's content.</p>
                                        <a href="#" className="btn"><span>E</span>xplore <span>M</span>ore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right col">
                            <div className="mx-4 my-4 text-center">
                                <div className="card">
                                    <img src={convertx} className="card-img-top" alt="..." width="550px"
                                        height="300px" />
                                    <div className="card-body">
                                        <h5 className="card-title">ConvertX - Currency Convertor&nbsp;&nbsp;&nbsp;<span className="badge bg-success">New</span></h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the
                                            bulk
                                            of the
                                            card's content.</p>
                                        <a href="#" className="btn"><span>E</span>xplore <span>M</span>ore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="third row">
                        <div className="left col">
                            <div className="mx-4 my-4 text-center">
                                <div className="card">
                                    <img src={wordcloud} className="card-img-top" alt="..." width="550px"
                                        height="300px" />
                                    <div className="card-body">
                                        <h5 className="card-title">WordCloud Using Python&nbsp;&nbsp;&nbsp;<span className="badge bg-success">New</span></h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the
                                            bulk
                                            of the
                                            card's content.</p>
                                        <a href="#" className="btn"><span>E</span>xplore <span>M</span>ore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right col">
                            <div className="mx-4 my-4 text-center">
                                <div className="card">
                                    <img src={invoice} className="card-img-top" alt="..." width="550px"
                                        height="300px" />
                                    <div className="card-body">
                                        <h5 className="card-title">Invoice System Using Java</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the
                                            bulk
                                            of the
                                            card's content.</p>
                                        <a href="#" className="btn"><span>E</span>xplore <span>M</span>ore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
