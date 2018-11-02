import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


export default class Example extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">PCRDA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/documention/">DOCUMENTATION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://trello.com/b/WBpyJukp/pcrda">FUTURE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ilearnit/PCRDA">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
