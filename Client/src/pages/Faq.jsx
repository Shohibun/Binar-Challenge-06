import React from "react";

export default function FaqUser() {
    return (
        <div className="container mt-5 pt-5" id="fq">
        <div className="row">
            <div className="col-md-6">
                <h4 className="font-weight-bold">
                    Frequently Asked Question
                </h4>

                <p className="mt-3 custom-user-font custom-color-user">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
            </div>
            <div className="col-md-6">
                <div id="accordion">
                    <div className="card mb-3">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-light collapsed w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <span className="float-left custom-user-font">
                                    Apa saja syarat yang dibutuhkan?
                                </span> 
                                <span className="float-right"><img src={require("../images/fi_chevron-down.png")} alt="Down"/></span>
                            </button>
                          </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body custom-user-font">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                          </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-light collapsed w-100" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span className="float-left custom-user-font">
                                Berapa hari minimal sewa mobil lepas kunci?
                            </span>
                            <span className="float-right"><img src={require("../images/fi_chevron-down-1.png")} alt="Down"/></span>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body custom-user-font">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn btn-light collapsed w-100" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span className="float-left custom-user-font">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                            </span>
                            <span className="float-right"><img src={require("../images/fi_chevron-down-2.png")} alt="Down"/></span>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body custom-user-font">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, hic!
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header" id="headingFour">
                          <h5 className="mb-0">
                            <button className="btn btn-light collapsed w-100" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className="float-left custom-user-font">
                                    Apakah Ada biaya antar-jemput?
                                </span>
                                <span className="float-right"><img src={require("../images/fi_chevron-down-3.png")} alt="Down"/></span>
                            </button>
                          </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                          <div className="card-body custom-user-font">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                          </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header" id="headingFive">
                          <h5 className="mb-0">
                            <button className="btn btn-light collapsed w-100" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span className="float-left custom-user-font">
                                    Bagaimana jika terjadi kecelakaan?
                                </span>
                                <span className="float-right"><img src={require("../images/fi_chevron-down-4.png")} alt="Down"/></span>
                            </button>
                          </h5>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                          <div className="card-body custom-user-font">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
