import React, { Component } from 'react';

// Style Imports
import '../../../assets/sass/module_styles/header_styles/header.scss';
import '../../../assets/sass/base_styles/helper_styles.scss';

class Header extends Component {
  render() {
    return (
      <div className='header-container hasborder'>
        <div className='header-logo'>
          Rohit R. Mohanty
        </div>
        <nav>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </nav>
      </div>
    )
  } 
}

export default Header;