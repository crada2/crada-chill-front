import React from "react";
//import {Redirect} from "react-router-dom";
import { Link } from "react-router-dom";

const Form = () => {
  const [image, setImage] = React.useState("");
  const [score, setScore] = React.useState("");
  const [name, setName] = React.useState("");
  const [director, setDirector] = React.useState("");
  const [genre, setGenre] = React.useState("");

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  const handleChangeScore = (event) => {
    setScore(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDirector = (event) => {
    setDirector(event.target.value);
  };

  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const movie = { image, score, name, director, genre };
    console.log(movie);
    fetch("http://localhost:8080/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      console.log("new movie added");
    });
  };

  return (
    <form>
      <div className="container">
        <div class="form-group">
          <label for="formGroupExampleInput2">Image</label>
          <input
            type="text"
            value={image}
            onChange={handleChangeImage}
            class="form-control"
            placeholder="Image"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Score</label>
          <input
            type="number"
            value={score}
            onChange={handleChangeScore}
            class="form-control"
            placeholder="Score"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            class="form-control"
            placeholder="Title"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Director</label>
          <input
            type="text"
            value={director}
            onChange={handleChangeDirector}
            class="form-control"
            placeholder="Director"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={handleChangeGenre}
            class="form-control"
            placeholder="Genre"
          />
        </div>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={handleClick}
        >
          <Link to="/"> Submit </Link>
        </button>
      </div>
    </form>
  );
};

export default Form;
