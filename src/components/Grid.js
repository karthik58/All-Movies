import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../context/MovieContext";
function Grid(props) {
  const history = useHistory();
  const handleClick = (e, id) => {
    e.preventDefault();
    history.push("/details/" + id);
  };
  const { loading, topRated, title } = props;
  return (
    <section class="home home--bg">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="home__title">
              <b style={{ fontSize: "17px" }}>{title} </b>
            </h1>
          </div>

          <div class="col-12">
            <div class="owl-carousel home__carousel">
              {!loading &&
                topRated.map((element) => {
                  let d = new Date(element.release_date);
                  d = d.toString();
                  return (
                    <div class="item" key={element.id}>
                      <div class="card card--big">
                        <div class="card__cover">
                          {element.poster_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                              alt=""
                            />
                          ) : (
                            "no image available"
                          )}

                          <a
                            href=""
                            class="card__play"
                            onClick={(e) => handleClick(e, element.id)}
                          >
                            <span> More details</span>
                          </a>
                        </div>

                        <div class="card__content">
                          <h3 class="card__title">{element.title}</h3>
                          <span class="card__category">
                            <a href="#">{d.slice(0, 15)}</a>
                          </span>
                          <span class="card__rate">
                            <i class="icon ion-ios-star"></i>{" "}
                            {element.vote_average == 0
                              ? "no rates available"
                              : element.vote_average}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="deco"></div>
    </section>
  );
}

export default Grid;
