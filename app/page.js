"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import css from "./page.module.css";

const page = () => {
  const [images, setImages] = useState([]);

  const GetImages = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=223667d1239871fc4b6eeef8d0d6def8&page=1`
      );
      console.log(data.results);
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetImages();
  }, []);

  return (
    <>
      <div className="main" >
        {Array.isArray(images) &&
          images.map((m, i) => (
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

export default page;
