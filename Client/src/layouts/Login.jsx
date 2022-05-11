import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

export default function SignUp() {
  const responseGoogle = (response) => {
    console.log(response)
  };

  return (
    <div className="container-fluid custom-auth-body">
      <div className="row">
        <div className="col-md-9 custom-auth-delete-spacing">
          <div className="custom-auth-transperency"></div>
        </div>
        <div className="col-md-3">
          <div className="p-4 row align-items-center custom-auth-point">
            <div className="col-md-12">
              <div className="mb-4 custom-auth-logo"></div>
              <h4 className="font-weight-bold mb-4">Welcome, Admin BCR</h4>
              <form action="/dasboard-user">
                <div className="form-group mb-3">
                  <label
                    htmlFor="email"
                    className="text-dark mb-1 custom-auth-font"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control p-2 custom-auth-font"
                    placeholder="Contoh: johndee@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="password"
                    className="text-dark mb-1 custom-auth-font"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control p-2 custom-auth-font"
                    placeholder="6+ karakter"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 font-weight-bold text-white rounded border border-light py-2 w-100 custom-auth-sign"
                >
                  Sign In
                </button>

                <p className="text-center mt-1 text-primary">
                  <Link to="/dashboard-admin">To Dashboard Admin</Link>
                </p>

                <p className="text-center mt-1">
                    <GoogleLogin 
                      clientId = "512358058842-irha8guanrdttm8fjc7mpvhmjlbjg23t.apps.googleusercontent.com"
                      buttonText = "Login With Google"
                      onSucces = {responseGoogle}
                      onFailure = {responseGoogle}
                      cookiePolicy = "single_host_origin"
                    />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
