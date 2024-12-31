"use client";

import Styles from "./page.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncGetMovies,
  getMtype,
  removeErrors,
  changePage,
} from "@/store/Action/index";
import { useEffect } from "react";

const MoviesType = ({ params }) => {
  const { mtype } = params;
  const dispatch = useDispatch();
  const { movies, movietype } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    if (mtype) dispatch(getMtype(mtype));
  }, []);

  useEffect(() => {
    if (movietype !== "") dispatch(asyncGetMovies());
  }, [movietype]);

  return (
    <>
      <div className="main">
        {movies &&
          movies.map((m, i) => (
            <div className="image" key={m.id}>
              <div>
                <div className="img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="title">
                  <p>
                    <Link href={`/${m.id}`}>{m.title}</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MoviesType;
