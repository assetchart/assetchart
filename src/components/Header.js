import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.png';
import logoMobile from '../images/logo-mobile.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img alt="Figurit Homepage" src={logo} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Figurit Homepage" src={logoMobile} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
