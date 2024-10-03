import React from "react";
import { useCart } from "react-use-cart";

import { Link } from "react-scroll";
/* eslint-disable jsx-a11y/anchor-is-valid */

function MainNavbar() {
  const { totalItems } = useCart();
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                  <h1>Villa</h1>
                </a>
                {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li>
                    <a href="/" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/properites">Properties</a>
                  </li>
                  <li>
                    <a href="/Property Details">Property Details</a>
                  </li>
                  <li>
                    <a href="/Contact Us">Contact Us</a>
                  </li>
                  <li>
                    <a href="/Product">Product</a>
                  </li>
                  <li>
                    <a href="/shoping">Shoping</a>
                  </li>
                  <li>
                    <Link
                      to="touch"
                      smooth={true}
                      offset={-100}
                      duration={3000}
                    >
                      Touch
                    </Link>
                  </li>

                  <li>
                    <a href="cart">
                    <i class="fa-solid fa-cart-shopping"></i> Cart page ({totalItems})
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default MainNavbar;
