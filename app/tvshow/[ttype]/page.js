"use client"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTvType, asyncGetTvShows } from "@/store/Action/TvAction";

const TvType = ({ params }) => {
  const { ttype } = params;
  const dispatch = useDispatch();
  const { tvShows } = useSelector((state) => state.tvReducer);

  useEffect(() => {
    if (ttype) {
      dispatch(setTvType(ttype));
      dispatch(asyncGetTvShows());
    }
  }, [ttype, dispatch]);

  return (
    <div className="main">
      {tvShows.map((show) => (
        <div className="image" key={show.id}>
          <div className="img">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt=""
            />
          </div>
          <div className="title">
            <p>{show.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TvType;
