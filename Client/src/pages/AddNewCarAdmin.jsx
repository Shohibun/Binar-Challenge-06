/* eslint-disable react/style-prop-object */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export default function AddNewCar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <p className="text-dark custom-font-1"><span className="font-weight-bold text-dark">Cars &gt; List Car &gt; </span>Add New Car</p>
                </div>
            </div>
            
            <h6 className="font-weight-bold custom-font-2 mb-4">Add New Car</h6>
            
            <div className="row">
                <div className="col-md-12 bg-white pt-4 pb-3">
                    <Form>
                        <div className="form-group row">
                            <label htmlFor="inputNama" className="col-sm-2 col-form-label custom-font-1">Nama<span className="custom-red">*</span></label>
                            <div className="col-sm-10">
                                <Input type="text" className="form-control custom-font-1 w-25" id="inputNama" placeholder="Nama"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputHarga" className="col-sm-2 col-form-label custom-font-1">Harga<span className="custom-red">*</span></label>
                            <div className="col-sm-10">
                                <Input type="text" className="form-control custom-font-1 w-25" id="inputharga" placeholder="Harga"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputImage" className="col-sm-2 col-form-label custom-font-1">Foto<span className="custom-red">*</span></label>
                            <div className="col-sm-10">
                                <div className="w-25 border pt-2 pr-2 d-inline-flex justify-content-between rounded">
                                    <span className="name custom-font-1 text-muted ml-2">No file selected</span>&nbsp;
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} id="files" className="custom-fa text-muted custom-size-aweseome"/>
                                    <Input type="file" name="" id=""/>
                                </div>
                                {/* <small id="image" className="form-text text-muted" style="font-size: 10px;">File size max. 2MB</small> */}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputStart" className="col-sm-2 col-form-label custom-font-1">Start Rent</label>
                            <div className="col-sm-10">
                                <Input type="text" readonly className="form-control-plaintext custom-font-1" id="inputStart" value="-"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputFinsih" className="col-sm-2 col-form-label custom-font-1">Finish Rent</label>
                            <div className="col-sm-10">
                                <Input type="text" readonly className="form-control-plaintext custom-font-1" id="inputFinish" value="-"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputCreated" className="col-sm-2 col-form-label custom-font-1">Created at</label>
                            <div className="col-sm-10">
                                <Input type="text" readonly className="form-control-plaintext custom-font-1" id="inputCreated" value="-"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputUpdated" className="col-sm-2 col-form-label custom-font-1">Updated at</label>
                            <div className="col-sm-10">
                                <Input type="text" readonly className="form-control-plaintext custom-font-1" id="inputUpdated" value="-"/>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            
            <div className="d-flex justify-content-start mt-5 pt-5">
                <button className="btn btn-outline-primary mr-2 custom-font-4">Cancel</button>
                <a className="btn btn-primary custom-font-4" href="/dashboard-admin">Save</a>
            </div>
        </div>
    );
};
