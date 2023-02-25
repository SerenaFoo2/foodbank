import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { MdAccountCircle } from "react-icons/md";
import { logout } from "../features/userSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavUser,
} from "./NavBarElements2";

const NavBar2 = ({ toggle }) => {
  const user = useSelector((state) => state.user);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              TGT
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {/* //spy to let you know which one you are working on with the
                highlights at under the links //offset number to match with the
                height of the navbar appearing */}
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Support
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
              {/* {!user.isAdmin && (
                <>
                  <NavItem>
                    <NavLinks to="/dashboard">Dashboard</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="/new-product">Create Product</NavLinks>
                  </NavItem>
                </>
              )} */}
              {user && (
                <>
                  <NavItem>
                    <NavLinks to="/orders">My orders</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="/cart">
                      <AiOutlineShoppingCart size={30} />
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <MdAccountCircle size={30} />
                    </NavLinks>
                  </NavItem>
                  <NavBtn>
                    <NavBtnLink onClick={handleLogout}>Sign out</NavBtnLink>
                  </NavBtn>
                </>
              )}
            </NavMenu>
            {!user && (
              <NavBtn>
                <NavBtnLink to="/login">Log In</NavBtnLink>
              </NavBtn>
            )}
            {/*if no user*/}
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar2;
