import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

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
    fetch("http://localhost:8080/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <form>
      <div className="container">
        <div className="form-group">
          <label for="formGroupExampleInput2">Image</label>
          <input
            type="text"
            value={image}
            onChange={handleChangeImage}
            className="form-control"
            placeholder="Image"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Score</label>
          <input
            type="number"
            value={score}
            onChange={handleChangeScore}
            className="form-control"
            placeholder="Score"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Director</label>
          <input
            type="text"
            value={director}
            onChange={handleChangeDirector}
            className="form-control"
            placeholder="Director"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={handleChangeGenre}
            className="form-control"
            placeholder="Genre"
          />
        </div>
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
