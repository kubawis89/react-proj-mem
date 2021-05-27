import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMem } from "../store/actions/globalActions";
import "./scss/AddMem.scss";
// import { NavLink } from "react-router-dom";

function AddMem() {
  const [newMemTitle, setNewMemTitle] = useState("");
  const onTitleChange = (e) => {
    setNewMemTitle(e.target.value);
    console.log(newMemTitle);
    console.log(newMemData.title);
  };

  const [newMemPath, setNewMemPath] = useState("");
  const onPathChange = (e) => {
    setNewMemPath(e.target.value);
    console.log(newMemPath);
    console.log(newMemData.img);
  };

  const [wwwImage, setNewMemSource] = useState(true);

  const setWwwSource = () => {
    setNewMemSource(true);
  };
  const setHddSource = () => {
    setNewMemSource(false);
  };

  const memDataFromState = useSelector((state) => state);

  const dispatch = useDispatch();

  const newMemData = {
    id: memDataFromState.memes.length + 1,
    title: newMemTitle,
    upvotes: 0,
    downvotes: 0,
    favorite: false,
    img: newMemPath,
  };

  return (
    <div className="addContainer">
      <h1>Add mem!</h1>
      <div className="addTitle">
        <label className="addTitle">Title:</label>
        <input
          className="addTitle"
          type="text"
          placeholder="Type new mem title"
          value={newMemTitle}
          onChange={onTitleChange}
        ></input>
      </div>
      <div className="">
        <div>
          <label>IMG file:</label>
          <button
            className={`${wwwImage ? "buttonActive" : "buttonInactive"}`}
            onClick={setWwwSource}
          >
            From the Internet
          </button>
          <button
            className={`${wwwImage ? "buttonInactive" : "buttonActive"}`}
            onClick={setHddSource}
          >
            From your PC
          </button>
        </div>
      </div>
      <div>
        <input
          className={`${wwwImage ? "pathActive" : "pathInactive"}`}
          type="url"
          placeholder="From the website address"
          value={newMemPath}
          onChange={onPathChange}
        ></input>
        <p className={`${wwwImage ? "pathInactive" : "pathActive"}`}>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            placeholder="From hard drive"
            value={newMemPath}
            onChange={onPathChange}
          ></input>
        </p>
      </div>
      <div>
        <button
          className="addButton"
          onClick={() => {
            const addedMem = newMemData;
            dispatch(addMem(addedMem));
            setNewMemPath("");
            setNewMemTitle("");
            setWwwSource(true);
          }}
        >
          ADD MEM!
        </button>
        <button
          className="addButton"
          onClick={() => {
            console.log(memDataFromState);
          }}
        >
          console.log
        </button>
      </div>
    </div>
  );
}

export default AddMem;
