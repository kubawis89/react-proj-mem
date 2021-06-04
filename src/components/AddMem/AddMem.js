import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMem } from "../../store/actions/globalActions";
import { AddContainer } from "./styledAddMem";

function AddMem() {
  const dispatch = useDispatch();
  const memDataFromState = useSelector((state) => state);

  const [newMemTitle, setNewMemTitle] = useState("");
  const onTitleChange = (e) => {
    setNewMemTitle(e.target.value);
  };

  const [newMemUrlPath, setNewMemUrlPath] = useState("");
  const onUrlPathChange = (e) => {
    setNewMemUrlPath(e.target.value);
  };

  const [newMemImgPath, setNewMemImgPath] = useState();
  const onImgPathChange = (e) => {
    setNewMemImgPath(URL.createObjectURL(e.target.files[0]));
  };

  const [wwwImage, setNewMemSource] = useState(true);
  const setWwwSource = () => {
    setNewMemSource(true);
  };
  const setHddSource = () => {
    setNewMemSource(false);
  };

  const newUrlMemData = {
    id: memDataFromState.memes.length + 1,
    title: newMemTitle,
    upvotes: 0,
    downvotes: 0,
    favorite: false,
    img: newMemUrlPath,
  };

  const newImgMemData = {
    id: memDataFromState.memes.length + 1,
    title: newMemTitle,
    upvotes: 0,
    downvotes: 0,
    favorite: false,
    img: newMemImgPath,
  };

  return (
    <main>
      <AddContainer>
        <h1>Go ahead, share some meme!</h1>
        <p>Just fill in the necessary data: </p>
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
        <div className="addImg">
          <label>Meme source: </label>
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
        <div className="input">
          <input
            className={`${wwwImage ? "pathActive" : "pathInactive"}`}
            type="url"
            placeholder="Type meme url address..."
            value={newMemUrlPath}
            onChange={onUrlPathChange}
          ></input>
          <label className={`${wwwImage ? "pathInactive" : "fileContainer"}`}>
            Click here to upload meme IMG!
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/jpg"
              placeholder="From hard drive"
              onChange={onImgPathChange}
            />
          </label>
        </div>
        <div>
          <button
            className={`${wwwImage ? "addButton" : "pathInactive"}`}
            onClick={() => {
              const addedMem = newUrlMemData;
              dispatch(addMem(addedMem));
              setNewMemUrlPath("");
              setNewMemTitle("");
              setWwwSource(true);
            }}
          >
            ADD MEM!
          </button>
          <button
            className={`${wwwImage ? "pathInactive" : "addButton"}`}
            onClick={() => {
              const addedMem = newImgMemData;
              dispatch(addMem(addedMem));
              setNewMemTitle("");
              setWwwSource(true);
            }}
          >
            ADD MEM!
          </button>
        </div>
      </AddContainer>
    </main>
  );
}

export default AddMem;
