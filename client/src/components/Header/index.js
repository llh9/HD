import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center w-100">
      <div className="container flex-row justify-space-between-lg justify-center align-center w-100">
        <div className='w-100'>
          <Link className="text-light " to="/">
            <h1 className="m-0">MERN-Portfolio Landon Hinkle</h1>
          </Link>
          <p className="m-0">Please leave your thoughts on your experience. </p>
          <hr></hr>
        </div>
        <div className='allnavs w-100'>
          <div className='navs'>
            <Link className="btn btn-info m-2" to="/">About Me</Link>
            <Link className="btn btn-info m-2" to="/portfolio">Portfolio</Link>
            <Link className="btn btn-info m-2" to="/resume">Resume</Link>
            <Link className="btn btn-info m-2" to="/contact">Contact Me</Link>
          </div>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-info m-2" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button className="btn btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-info m-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-light m-2" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
