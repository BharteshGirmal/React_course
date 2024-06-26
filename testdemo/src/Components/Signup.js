import React from 'react';

export default function Signup() {
  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto border border-dark shadow-lg p-4 bg-light">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-sm px-4">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}
