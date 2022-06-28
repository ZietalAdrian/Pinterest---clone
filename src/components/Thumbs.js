import React, { useContext } from "react";
import { PinContext } from "../context/PinContext";
import PinThumb from "./PinThumb";

const Thumbs = ({ clickedPin, handleOnSearchTag }) => {
  const { images: pins } = useContext(PinContext);

  return (
    <div className="gap-3 mt-6 mx-2 px-20 columns-5">
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
  );
};

export default Thumbs;
