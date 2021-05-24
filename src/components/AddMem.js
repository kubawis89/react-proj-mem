import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUpvote,
  addDownvote,
  favoriteMem,
} from "../store/actions/globalActions";
import "./scss/Memes.scss";

function AddMem() {
  const memDataFromState = useSelector((state) => state);
  const dispatch = useDispatch();

  const memAdd = memDataFromState.memes.map((mem) => (
    <div key={mem.id} className="memSection">
      <h2>Add: {mem.title}</h2>
      <img className="memImg" src={mem.img} width="600" alt={mem.title}></img>
      <div className="assesment">
        <div className="vote">
          <section className="thumbs">
            <button
              onClick={() => {
                const thumbsUpId = mem.id;
                dispatch(addUpvote(thumbsUpId));
              }}
            >
              <img src="/images/up.png" width="30" alt="Upvotes" />
            </button>
            {mem.upvotes}
          </section>
          <section className="thumbs">
            <button
              onClick={() => {
                const thumbsDownId = mem.id;
                dispatch(addDownvote(thumbsDownId));
              }}
            >
              <img src="/images/down.png" width="30" alt="Downvotes" />
            </button>
            {mem.downvotes}
          </section>
        </div>
        <div className="voteResult">
          <span
            className={`${mem.upvotes - mem.downvotes > 4 ? "hot" : "span1"}`}
          >
            Hot
          </span>
          <span
            className={`${
              mem.upvotes - mem.downvotes < 5 &&
              mem.upvotes - mem.downvotes > -1
                ? "regular"
                : "span2"
            }`}
          >
            Regular
          </span>
          <span
            className={`${mem.upvotes - mem.downvotes < 0 ? "poor" : "span3"}`}
          >
            Poor
          </span>
        </div>
        <div className="favorite">
          <button
            onClick={() => {
              const favoriteMemId = mem.id;
              dispatch(favoriteMem(favoriteMemId));
            }}
          >
            <img
              src={`${
                mem.favorite
                  ? "/images/addedToFavorite.png"
                  : "/images/addToFavorite.png"
              }`}
              width="30"
              alt={`${
                mem.favorite ? "Remove from favorite" : "Add to favorite"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  ));

  return <div>{memAdd}</div>;
}

export default AddMem;
