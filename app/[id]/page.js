"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "./page.module.css";

const Details = ({ params }) => {
  const [detail, setdetail] = useState(null);
  const GetMovieDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
      );
      setdetail(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!detail) GetMovieDetails();
  }, []);
  return (
    <>
      <div className={css.main}>
        <div className={css.moviedets}>
          <div
            className={css.movie}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail?.backdrop_path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className={css.layer}>
              {detail && (
                <div className={css.moviedetails}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                    alt={detail.original_title}
                  />
                  {/* Other movie details can be displayed here */}
                </div>
              )}
              {detail && (
                <div className={css.moviesdet}>
                  <h2>{detail.original_title}</h2>
                  <h3>Release Date: {detail.release_date}</h3>
                  <h3>Overview</h3>
                  <p className={css.overview}>{detail.overview}</p>
                  <div className={css.budget}>
                    <h4>
                      Budget: <span>${detail.budget}</span>{" "}
                    </h4>
                    <h4>
                      Revenue: <span>${detail.revenue}</span>{" "}
                    </h4>
                  </div>
                  <h4>
                    Original Language : <span>{detail.original_language}</span>
                  </h4>
                  <h4>
                    Status : <span>{detail.status}</span>
                  </h4>
                  <h4>
                    Runtime : <span>{detail.runtime}hr</span>
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
