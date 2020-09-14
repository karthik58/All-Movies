import React, { useEffect, useContext, useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../context/MovieContext";
import { useHistory } from "react-router-dom";

function Header() {
  const [state, setstate] = useState(false);
  const handleChange = useContext(Context).handleChange;
  const handleSubmit = useContext(Context).handleSubmit;
  let history = useHistory();
  const handleSubmit1 = (e) => {
    e.preventDefault();
    handleSubmit();
    history.push("/search");
  };
  const search = useContext(Context).state.search;
  useEffect(() => {
    document.querySelector("#input").focus();
  }, []);
  let classe;
  if (!state) {
    classe = "header__nav";
  } else {
    classe = "header__nav open";
  }
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <a href="index.html" className="header__logo">
                  <img src={logo} alt="" />{" "}
                </a>

                <ul className={classe}>
                  <li className="header__nav-item">
                    <Link
                      to="/top-rated"
                      className="dropdown-toggle header__nav-link"
                      href="#"
                      role="button"
                      id="dropdownMenuHome"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Top Rated
                    </Link>
                  </li>

                  <li className="header__nav-item">
                    <Link
                      className="dropdown-toggle header__nav-link"
                      to="/popular"
                      role="button"
                      id="dropdownMenuCatalog"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Popular
                    </Link>
                  </li>

                  <li className="header__nav-item">
                    <Link to="/upcoming" className="header__nav-link">
                      Upcoming
                    </Link>
                  </li>
                </ul>

                <div className="header__auth">
                  <form action="" onSubmit={(e) => handleSubmit1(e)}>
                    <input
                      type="text"
                      className="form__sass"
                      placeholder="search for a movie"
                      id="input"
                      onChange={(e) => handleChange(e)}
                      value={search}
                    />
                    <label htmlFor="input">
                      {" "}
                      <button
                        to="/search"
                        className="header__search-btn"
                        type="submit"
                      >
                        <i className="icon ion-ios-search"></i>
                      </button>
                    </label>
                  </form>
                </div>

                <button
                  className="header__btn"
                  type="button"
                  onClick={() => setstate(!state)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form action="#" className="header__search"></form>
    </div>
  );
}

export default Header;
