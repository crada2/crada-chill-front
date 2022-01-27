import React, { useEffect } from "react";

const Card = () => {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);

  return (
    <div
      className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
      style={{ background: "#0A0A0A" }}
    >
      {movies.map((movie) => (
        <div className="card p-1 m-3 " style={{ width: "16rem" }}>
          <img className="card-img-top" src={movie.image} alt="" />
          <button class="rounded-3 btn btn-secondary btn-sm opacity-75">
            {movie.score}
          </button>

          <div className="card-body">
            <h5 className="card-title">🍿{movie.name} </h5>

            <i className="card-text">{movie.director}</i>
            <p>
              <i className="fs-6 text"> {movie.genre}</i>
            </p>

            <div
              class="btn-group p-2 m-2 "
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class=" btn btn-outline-success">
                Update
              </button>

              <button type="button" class="btn btn-outline-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
