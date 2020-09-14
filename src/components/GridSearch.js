import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import Axios from "axios";

function Grid(props) {
  const history = useHistory();
  const params = useParams();
  const [state, setstate] = useState({
    loading: true,
    data: [],
  });
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=cc9ee4b9b0cc89b77eb6a06159c9db7e&language=en-US`
    ).then((res) => {
      setstate({ ...state, loading: false, data: res.data });
      console.log(res.data);
    });
  }, []);

  return (
    <section class="home home--bg">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="home__title">
              <b> {state.data.title}</b>
            </h1>
          </div>

          <div class="col-12">
            <div class="owl-carousel home__carousel">
              <div className="container-houssem">
                <div className="image-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${state.data.poster_path}`}
                    alt=""
                    className="img-houssem"
                  />
                </div>
                <div className="discr">
                  <span className='"card__category'>overview : </span>
                  <p>{state.data.overview}</p>
                  <span>original language : </span>
                  <p>{state.data.original_language}</p>
                  <div>
                    <a
                      target="_blanc"
                      href={state.data.homepage}
                      className="btn"
                    >
                      visite website
                    </a>
                    <a
                      className="btn"
                      onClick={() => history.goBack()}
                      style={{ cursor: "pointer" }}
                    >
                      back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco"></div>
    </section>
  );
}

export default Grid;
