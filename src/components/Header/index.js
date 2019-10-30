import React from 'react';

// Others
import Navbar from 'react-bootstrap/Navbar';
import {StyledNavbar} from './styled'

function Header(){
    return (
    <React.Fragment>
      <StyledNavbar>
      <Navbar.Brand href="/">Code IT - Challenger</Navbar.Brand>
    </StyledNavbar>
    </React.Fragment>
    );
  }


export default Header;
