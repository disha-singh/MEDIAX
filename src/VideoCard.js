import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <h3>
        {movie.title || movie.original_name} •{" "}
        {movie.release_date || movie.first_air_date}
      </h3>
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <p className="videoCard_stats">
        {movie.media_type && `${movie.media_type} •`} <ThumbUpSharp />{" "}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
