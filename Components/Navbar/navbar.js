"use client";
import React, { useState } from "react";
import css from "./page.module.css";
import Link from "next/link";

const Nav = () => {
  const [isshow, setisshow] = useState(false);
  const [istvshow, setistvshow] = useState(false);
  return (
    <div>
      <div className={css.nav}>
        <div className={css.leftnav}>
          <Link href="/"><h1>Logo</h1></Link>
          <div
            onMouseEnter={() => setisshow(true)}
            onMouseLeave={() => setisshow(false)}
          >
            <h3>Movies</h3>
            {isshow && (
              <div className={css.hover}>
                <Link href="/movie/popular">Popular</Link>
                <Link href="/movie/upcoming">Upcoming</Link>
                <Link href="/movie/now_playing">Now Playing</Link>
                <Link href="/movie/top_rated">Top Rated</Link>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setistvshow(true)}
            onMouseLeave={() => setistvshow(false)}
          >
            <h3>Tv Shows</h3>
            {istvshow && (
              <div className={css.hover}>
                <Link href="/tvshow/popular">Popular</Link>
                <Link href="/tvshow/upcoming">Airing Toady</Link>
                <Link href="/tvshow/now_playing">On TV</Link>
                <Link href="/tvshow/top_rated">Top Rated</Link>
              </div>
            )}
          </div>
        </div>
        <div className={css.rightnav}>
          <h2>Search</h2>
        </div>
      </div>
    </div>
  );
};

export default Nav;
