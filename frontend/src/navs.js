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

  onFuture = () => {
    const url = 'https://trello.com/b/WBpyJukp/pcrda';
    window.open(url, '_blank');
  }

  onAbout = () => {
    const url = '/about/';
    window.open(url, '_blank');
  }

  onHelp = () => {
    const url = '/help/';
    window.open(url, '_blank');
  }

  onGithub = () => {
    const url = 'https://github.com/ilearnit/PCRDA';
    window.open(url, '_blank');
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
                <NavLink href='#' onClick={this.onHelp}>Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#' onClick={this.onAbout}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#' onClick={this.onFuture}>Future</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#' onClick={this.onGithub}>Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
