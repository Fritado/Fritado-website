import React, { useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { MdOutlineLiveHelp } from "react-icons/md";
import { PiPresentationChartBold } from "react-icons/pi";

const NavbarFour = () => {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [logo, setLogo] = useState("assets/img/logo-white.png");
  const menuActive = () => {
    setActive(!active);
  };

  const toggelDropDown = () => {
    setDropDown(!dropDown);
  };

  const changeBackground = () => {
    if (window.scrollY >= 92 || window.innerWidth <= 992) {
      setNavbar(true);
      setLogo("assets/img/logo3.png");
    } else {
      setNavbar(false);
      setLogo("assets/img/logo-white.png");
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", changeBackground); // Add resize listener
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", changeBackground); // Clean up resize listener
    };
  }, []);

  useEffect(() => {
    let items = document.querySelectorAll(".menu-item-has-children > a");
    for (let i = 0; i < items.length; i++) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }, []);
  return (
    <>
      {/* ==================== Navbar Two Start ====================*/}
      <nav
        className={
          navbar
            ? " li-color navbar navbar-area navbar-expand-lg "
            : "li-color-before navbar navbar-area navbar-area-3 navbar-expand-lg"
        }
      >
        <div
          className={
            navbar
              ? "container nav-container bg-white "
              : " container nav-container"
          }
        >
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo ">
            <Link to="/">
              <img src={logo} alt="fritado-logo" />
            </Link>
          </div>

          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5 navbarFive ">
              <li className="">
                <Link to="/">Home</Link>
              </li>

              <li className="">
                <Link to="/solutions">Solutions</Link>
              </li>
              <li className="">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="#" onClick={toggelDropDown}>
                  Resources
                </Link>

                <ul className={dropDown ? "sub-menu active" : "sub-menu"}>
                  {/* {dropDown && ( <span>
                  <BiSolidUpArrow />
                </span>)} */}
                  <li className="d-flex flex-row gap-2">
                    <div>
                      <Link
                        to="/blog"
                        className="resource-dropdown d-flex flex-row gap-3"
                      >
                        <span
                          className="position-relative"
                          style={{ top: "10px" }}
                        >
                          <BsBook size={26} />
                        </span>
                        <span>
                          Blog
                          <br />
                          Access popular guides,
                          <br /> tips & stories about
                          <br />
                          automation.
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/help-center"
                      className="resource-dropdown d-flex flex-row gap-3"
                    >
                      <span
                        className="position-relative"
                        style={{ top: "10px" }}
                      >
                        {" "}
                        <MdOutlineLiveHelp size={26} />
                      </span>
                      <span>
                       Help Center
                        <br />
                        Explore our resources
                        <br /> and documentation.
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/demo"
                      className="resource-dropdown d-flex flex-row gap-3"
                    >
                      <span
                        className="position-relative"
                        style={{ top: "10px" }}
                      >
                        <PiPresentationChartBold size={26} />
                      </span>
                      <span>
                        Request for demo
                        <br />
                        See Our Solution in Action
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center  ">
            {/* <Link
              className=" btn btn-base-color border-radius-5 d-flex align-items-center"
              to="https://platform.fritado.com/"
              target="_"
            >
              Go to portal <FaArrowRight className="mt-0 " />
            </Link> */}
            <span className="btn-tab btn-base-color solution-register">
              <Link
                to="https://platform.fritado.com/"
                target="_"
                className="solution-btn"
              >
                Go to portal 
              </Link>
            </span>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================
  btn- #2f82a2db  icon-#2f82a2db
      */}
    </>
  );
};

export default NavbarFour;
