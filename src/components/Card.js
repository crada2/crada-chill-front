import React from "react";

const Card = ({ image, score, name, director, genre, onDelete }) => {
  console.log(image);
  return (
    <div className="card p-1 m-3 " style={{ width: "16rem" }}>
      <img className="card-img-top" src={image} alt="" />
      <button className="rounded-3 btn btn-secondary btn-sm opacity-75">
        {score}
      </button>

      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">{`🍿 ${name}`}</h5>

        <i className="card-text">Director: {director}</i>
        <p>
          <i className="fs-6 text">Genre: {genre}</i>
        </p>

        <div
          className="btn-group d-flex justify-content-center"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-success">
            Update
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
