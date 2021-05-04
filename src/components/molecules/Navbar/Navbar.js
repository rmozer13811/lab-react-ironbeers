import React from 'react';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="nav">
      <Link to="/">
        <MaterialIcon icon="house" size="large" />
      </Link>
    </div>
  )
}

export default Navbar;
