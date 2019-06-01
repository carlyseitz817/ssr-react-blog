import React from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import auth0 from '../../services/auth0';

const BsNavLink = (props) => {
  const { route, title } = props;
  const className = props.className || "";

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
  )
}

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable"> Login </span>
  )
}

const Logout = () => {
  return (
    <span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> Logout </span>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { isAuthenticated } = this.props;


    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Woodbern Blogs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown className="port-navbar-link port-dropdown-menu" nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          
            {
                isAuthenticated &&

                  <DropdownToggle className="port-dropdown-toggle" nav caret>
            
                    My Account
          
                  </DropdownToggle>

            }
          
          <DropdownMenu className="dropdowndowndown" right>

            <DropdownItem>
              
              <BsNavLink className="port-dropdown-item"
                
                route="/dashboard"
                
                title="DASHBOARD" />
            
            </DropdownItem>


            <DropdownItem>
              
              <BsNavLink className="port-dropdown-item"
                
                route="/postEditor"
                
                title="NEW POST" />
            
            </DropdownItem>

          </DropdownMenu>
        </UncontrolledDropdown>
              
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="ABOUT" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blog" title="BLOG POSTS" />
              </NavItem>

              {
                !isAuthenticated &&

                <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
              }

              {
                isAuthenticated &&

                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              } 

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}