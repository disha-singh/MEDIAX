import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
      <ul class="load">
        <li>
          <a href="#">
            {" "}
            <div>{"<<"}</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div>{"<"}</div>{" "}
          </a>
          <a href="#"> 1 </a>
          <a href="#"> 2 </a>
          <a href="#"> 3 </a>
          <a href="#"> 4 </a>
          <a href="#">
            {" "}
            <div>{">"}</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div>{">>"}</div>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Results;