/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faKey, faClock } from "@fortawesome/free-solid-svg-icons";

export default function ListCar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <p className="text-dark custom-font-1"><span className="font-weight-bold text-dark">Cars &gt; </span>List Car</p>
                </div>
            </div>
            
            <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold custom-font-2">List Car</h6>
                <a className="btn text-white custom-add" href="/add-new-car-admin">+ &nbsp; Add New Car</a>
            </div>
            
            <div className="d-flex justify-content-start mb-4 mt-2">
                <button className="btn custom-btn-car custom-btn-car-active mr-2">All</button>
                <button className="btn custom-btn-car mr-2">Small</button>
                <button className="btn custom-btn-car mr-2">Medium</button>
                <button className="btn custom-btn-car mr-2">Large</button>
            </div>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="col-md-4">
                    <div className="card p-3 mb-4">
                        <img src={require('../images/image 1.png')} className="card-img-top" alt="Mobil"/>
                        <div className="card-body">
                            <p className="card-text custom-font-3">Nama/Tipe Mobil</p>
                            <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faKey} className="custom-size-aweseome"/></span>&nbsp;Start rent - Finish rent</p>
                            <p className="card-text custom-font-4"><span><FontAwesomeIcon icon={faClock} className="custom-size-aweseome"/></span>&nbsp;Updated at 4 Apr 2022, 09.00</p>
                            <div className="row">
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-outline-danger custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faTrash} className="custom-size-aweseome"/>&nbsp;Delete</a>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span>
                                        <a href="#" className="btn btn-success custom-font-4 w-100 py-2">
                                            <FontAwesomeIcon icon={faPenToSquare} className="custom-size-aweseome"/>&nbsp;Edit</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
};
