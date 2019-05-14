import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="sticky-top">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">PCRDA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='/help/'>Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/about/'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://trello.com/b/WBpyJukp/pcrda'>Future</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/ilearnit/PCRDA'>Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
