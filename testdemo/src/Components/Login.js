import React from 'react';

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto border border-dark shadow-lg p-4 bg-light">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-sm px-4">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
