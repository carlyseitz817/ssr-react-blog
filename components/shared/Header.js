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
  Dropdown,
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

  renderBlogMenu() {
    const { isSiteOwner } = this.props;
    const { user } = this.props;

    if (user) {
      return (
        <Dropdown className="port-navbar-link port-dropdown-menu" nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            Blog
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item"
                route="/blogs"
                title="Blogs" />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item"
                route="/blogs/new"
                title="Create a Blog" />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item"
                route="/blogs/dashboard"
                title="Blogs Dashboard" />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    }

    return (
      <NavItem className="port-navbar-item">
        <BsNavLink route="/blogs" title="Blog" />
      </NavItem>
    )
  }

  render() {
    const { isAuthenticated, user, className } = this.props;
    const { isOpen } = this.state;

    const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">SSR Next.js Blog</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="ABOUT" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blog" title="BLOG" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/postEditor" title="POST EDITOR" />
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

              {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
              </DropdownItem>
                                <DropdownItem>
                                    Option 2
              </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
              </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}






// import React from 'react';
// import Link from 'next/link';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from 'reactstrap';

// import auth0 from '../../services/auth0';

// const BsNavLink = (props) => {
//     const { route, title } = props;

//     return (
//         <Link href={route}>
//             <a className="nav-link port-navbar-link">{title}</a>
//         </Link>
//     );
// };

// const Login = () => {
//     return (
//         <span onClick={auth0.login} className="nav-link port-navbar-link">Login</span>
//     )
// }

// const Logout = () => {
//     return (
//         <span onClick={auth0.logout} className="nav-link port-navbar-link">Logout</span>
//     )
// }

// export default class Example extends React.Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//     render() {
//         const { isAuthenticated, user, className } = this.props;
//         const { isOpen } = this.state;

//         const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';


//         return (
//             <div>
//                 <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
//                     <NavbarBrand className="port-navbar-brand" href="/">SSR Next.js Blog</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem className="port-navbar-item">
//                                 <BsNavLink route="/about" title="ABOUT" />
//                             </NavItem>
//                             <NavItem className="port-navbar-item">
//                                 <BsNavLink route="/blog" title="BLOG" />
//                             </NavItem>

//                             {
//                                 !auth0.isAuthenticated() &&

//                                 <NavItem className="port-navbar-item">
//                                     <Login />
//                                 </NavItem>
//                             }

//                             {
//                                 auth0.isAuthenticated() &&

//                                 <NavItem className="port-navbar-item">
//                                     <Logout />
//                                 </NavItem>
//                             }

//                             {/* <UncontrolledDropdown nav inNavbar>
//                                 <DropdownToggle nav caret>
//                                     Options
//                 </DropdownToggle>
//                                 <DropdownMenu right>
//                                     <DropdownItem>
//                                         Option 1
//                   </DropdownItem>
//                                     <DropdownItem>
//                                         Option 2
//                   </DropdownItem>
//                                     <DropdownItem divider />
//                                     <DropdownItem>
//                                         Reset
//                   </DropdownItem>
//                                 </DropdownMenu>
//                             </UncontrolledDropdown> */}
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//             </div>
//         );
//     }
// }

