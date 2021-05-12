import React from 'react'

export const Contact = () => {
    return (
        <>
            <section id="section-contact">
                <div className="container text-center">
                    <div className="row px-4 ">
                        <div className="col-md-12 text-center wow fadeInUp">
                            <div className="section-heading">
                                <h2 className="heading-title"><strong>C</strong>ontact</h2>
                                <p>Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto
                                    brute
                                    disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis
                                    molestiae pri. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="container text-start">
                                <form action="/">
                                    <div className="name mb-3">
                                        <label for="exampleInputtext1" className="form-label">Full Name
                                            <strong>*</strong></label>
                                        <input type="text" className="form-control" id="exampleInputName" required />
                                    </div>
                                    <div className="name mb-3">
                                        <label for="exampleInputtext2" className="form-label">E-Mail
                                            <strong>*</strong></label>
                                        <input type="text" className="form-control" id="exampleInputName" required />
                                    </div>
                                    <div className="name mb-3">
                                        <label for="exampleInputtext3" className="form-label">Mobile No.
                                            <strong>*</strong></label>
                                        <input type="text" className="form-control" id="exampleInputName" required />
                                    </div>
                                    <div className="name mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Comment
                                            <strong>*</strong></label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                            required></textarea>
                                    </div>
                                    <div className="send container text-center">
                                        <button type="submit" className="btn"><span>S</span>end</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </section>

        </>
    )
}
