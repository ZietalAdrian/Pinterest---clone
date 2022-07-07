import React, { useContext } from "react";

import { PinContext } from "../context/PinContext";

import Pin from "./Pin";
import Thumbs from "./Thumbs";

const Board = ({
  pins,
  setPickedImg,
  pickedImg,
  loading,
  error,
  hasMore,
  random,
  openModal,
  closeModal,
  openToast,
  handleOnClickOpenModalSingIn,
}) => {
  const { setInput, setImages, setQuery, setPage } = useContext(PinContext);

  const clickedPin = (id) => {
    setPickedImg(pins.find((photo) => photo.id === id));
  };
  const handleOnSearchTag = (tag) => {
    setInput("");
    setImages([]);
    setQuery(tag);
    setPage(1);
    setPickedImg(null);
  };

  return (
    <>
      {pickedImg && (
        <Pin
          pinObj={pickedImg}
          handleOnSearchTag={handleOnSearchTag}
          openModal={openModal}
          closeModal={closeModal}
          openToast={openToast}
          handleOnClickOpenModalSingIn={handleOnClickOpenModalSingIn}
        />
      )}
      <Thumbs
        clickedPin={clickedPin}
        setPickedImg={setPickedImg}
        handleOnSearchTag={handleOnSearchTag}
      />
      <div className="text-center pt-5 text-3xl">{loading && "Loading..."}</div>
      <div className="text-center pt-5 text-3xl">{error && error}</div>
      <div className="text-center pt-5 text-3xl my-10">
        {!hasMore && !random && "To już koniec Pinów tej kategorii"}
      </div>
    </>
  );
};
export default Board;
