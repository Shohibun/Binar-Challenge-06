/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function NavbarAdmin() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <button
        type="button"
        id="sidebarCollapse"
        className="btn btn-light navbar-brand"
      >
        <i className="navbar-toggler-icon"></i>
      </button>

      <div className="form-inline">
        <form>
          <div className="inner-addon left-addon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-muted ml-2 custom-fa custom-size-aweseome"
            />
            <input
              type="text"
              className="form-control ml-2"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0 custom-font-4"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        &nbsp; &nbsp; &nbsp;
        <span className="custom-account">U</span>
        &nbsp;&nbsp;
        <DropdownButton variant="light" title="Unis Badri">
          <a className="dropdown-item" href="#">
            Edit Profile
          </a>
          <a className="dropdown-item" href="/">
            Logout
          </a>
        </DropdownButton>
      </div>
    </nav>
  );
}
