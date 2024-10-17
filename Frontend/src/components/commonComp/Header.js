import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { MdOutlineLiveHelp } from "react-icons/md";
import { PiPresentationChartBold } from "react-icons/pi";
import { BiSolidUpArrow } from "react-icons/bi";

const Header = () => {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const menuActive = () => {
    setActive(!active);
  };

  const toggelDropDown = () => {
    setDropDown(true);
  };
  const changeBackground = () => {
    if (window.scrollY >= 720) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* ==================== Navbar Two Start ====================*/}
      <nav
        className={
          navbar
            ? "navbar navbar-area navbar-expand-lg bg-white li-color "
            : "navbar navbar-area navbar-area-3 navbar-expand-lg li-color"
        }
      >
        <div className=" container nav-container  bg-white ">
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
          <div className="logo ml-20">
            <Link to="/">
              <img src="assets/img/logo3.png" alt="img" />
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
                          <p>
                            {" "}
                            Access popular guides,
                            <br /> tips & stories about
                            <br />
                            automation.
                          </p>
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/guide"
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
                        Guide
                        <br />
                        Connect with other Makers,
                        <br /> exchange ideas & tips.
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
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <Link
              className="btn btn-base-color border-radius-5 d-flex align-items-center"
              to="https://platform.fritado.com/"
            >
              Go to portal <FaArrowRight className="mt-0" />
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================
  btn- #2f82a2db  icon-#2f82a2db
      */}
    </>
  );
};

export default Header;