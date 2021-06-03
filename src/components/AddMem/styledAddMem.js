import styled from "styled-components";

export const AddContainer = styled.div`
  background-color: #222930;
  padding: 50px 20px 50px 20px;
  text-align: center;
  margin: 30px 0 0 0;
  border-radius: 5px;
  width: 600px;
  h1 {
    font-size: 30px;
    font-weight: 400;
    color: #39a5f1;
    padding: 5px;
    margin-bottom: 5px;
  }
  .addTitle {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0 0 0;
    font-size: 30px;
  }
  .addImg {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 30px 0 0 0;
    font-size: 16px;
    label {
      text-align: center;
    }
  }
  .pathInactive {
    display: none;
  }
  .pathActive {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 18px;
    width: 320px;
    height: 25px;
  }
  .input {
    display: flex;
    justify-content: center;
  }
  .addButton {
    width: 300px;
    background-color: #36b03c;
    color: white;
    font-size: 16px;
    padding: 5px 5px;
    margin-top: 50px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #25a02b;
      transform: scale(1.02);
    }
  }
  .fileContainer {
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    background: lightgray;
    width: 320px;
    height: 25px;
    color: black;
    &:hover {
      cursor: pointer;
      background: darkgray;
    }
  }
  .fileContainer [type="file"] {
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  .buttonActive {
    background-color: #fcdc00;
    font-size: 16px;
    margin: 10px 0;
    width: 175px;
    padding: 2px 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #f48024;
      transform: scale(1.02);
    }
  }
  .buttonInactive {
    background-color: darkgray;
    font-size: 16px;
    margin: 10px 0;
    width: 175px;
    padding: 2px 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #f48024;
      transform: scale(1.02);
    }
  }
`;
