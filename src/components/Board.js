import React, { useState } from "react";
import PinThumb from "./PinThumb";
import Pin from "./Pin";

const Board = ({
  pins,
  setQuery,
  setPage,
  setImages,
  setInput,
  onOpen,
  modal,
  setModal,
  login,
  setLogin,
  setToast,
  loading,
  error,
  hasMore,
  randImg,
  setRandom,
  random,
}) => {
  const [show, setShow] = useState(false);
  const [pickedImg, setPickedImg] = useState(null);

  const clickedPin = (id) => {
    if (random) {
      setPickedImg(
        randImg.find((photo) => {
          return photo.id === id;
        })
      );
    } else {
      setPickedImg(
        pins.find((photo) => {
          return photo.id === id;
        })
      );
    }
    setShow(true);
  };

  const handleOnSearchTag = (tag) => {
    setInput("");
    setShow(false);
    setImages([]);
    setQuery(tag);
    setPage(1);
  };

  if (random && !pickedImg) {
    if (randImg) {
      return (
        <div className="gap-3 mt-6 mx-2 px-20 columns-5">
          {randImg.map((obj, index) => {
            return (
              <PinThumb
                handleOnSearchTag={handleOnSearchTag}
                key={index}
                obj={obj}
                clickedPin={clickedPin}
              />
            );
          })}
        </div>
      );
    }
  } else {
    return (
      <>
        {!show && !random ? (
          <div className="gap-3 mt-6 mx-2 px-20 columns-5">
            {console.log("nie random 1")}
            {pins.map((obj, index) => {
              return (
                <PinThumb
                  handleOnSearchTag={handleOnSearchTag}
                  key={index}
                  obj={obj}
                  clickedPin={clickedPin}
                />
              );
            })}
          </div>
        ) : (
          <>
            {pickedImg && (
              <div>
                {console.log("nie random 2")}
                <Pin
                  handleOnSearchTag={handleOnSearchTag}
                  obj={pickedImg}
                  pins={pins}
                  clickedPin={clickedPin}
                  onOpen={onOpen}
                  modal={modal}
                  setModal={setModal}
                  login={login}
                  setLogin={setLogin}
                  setToast={setToast}
                  randImg={randImg}
                  random={random}
                />
              </div>
            )}
          </>
        )}
        <div className="text-center pt-5 text-3xl">
          {loading && "Loading..."}
        </div>
        <div className="text-center pt-5 text-3xl">{error && error}</div>
        <div className="text-center pt-5 text-3xl my-10">
          {!hasMore && "To już koniec Pinów tej kategorii"}
        </div>
      </>
    );
  }
};
export default Board;
