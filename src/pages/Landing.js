import Hero from "../components/Hero";
import Card from "../components/Card";
import React, { useEffect } from "react";

const Landing = () => {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    console.log("mount");
    setLoading(false);
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const renderMovies = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return movies.map(({ id, image, score, name, director, genre }) => (
      <Card
        key={id}
        image={image}
        score={score}
        name={name}
        director={director}
        genre={genre}
        onDelete={() => handleDeleteMovie(id)}
      />
    ));
  };

  return (
    <div>
      <Hero />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 movies-container">
        {renderMovies()}
      </div>
    </div>
  );
};

export default Landing;
