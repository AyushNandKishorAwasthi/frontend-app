import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = () => {
  // console.log(props);
  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 2000);
  return (
    <nav className="ui very raised padded segment">
      <a className="ui teal inverted segment">Gloria</a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <NavLink to="/about">About</NavLink>
        </button>
        <button className="ui button">
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
