import React from "react";
import { AiFillMeh } from "react-icons/ai";

const PinThumb = ({ obj, clickedPin, handleOnSearchTag }) => {
  const { id, urls, user, tags, description } = obj;

  const handleOnClick = () => {
    clickedPin(id);
  };

  const showTags = () => {
    const tagsToShow = tags.map((tag, index) => {
      return (
        <div
          key={index}
          onClick={() => handleOnSearchTag(tag.title)}
          className="bg-gray-200 rounded-xl px-2 py-1 mr-1 cursor-pointer font-semibold text-xs hover:text-gray-500 capitalize max-h-6 truncate"
        >
          <span className="hover:underline">{tag.title}</span>
        </div>
      );
    });
    return <div className="flex my-2 max-h-6">{tagsToShow}</div>;
  };

  return (
    <div
      className={`flex flex-col rounded-xl cursor-pointer mt-3 first:mt-0`}
    >
      <div className="mb-1">
        <img
          onClick={handleOnClick}
          className="h-full w-full first-letter: rounded-xl"
          src={urls?.full}
          alt=""
        />
      </div>
      {tags && showTags()}
      {description && (
        <span className="text-xs block">{`${description.substring(
          0,
          60
        )}...`}</span>
      )}
      <div className="flex">
        <div className="rounded-full w-8 h-8 mr-2 mt-1 cursor-pointer">
          {user.profile_image.medium ? (
            <img
              className="w-full h-full rounded-full"
              src={user?.profile_image.medium}
              alt=""
            />
          ) : (
            <span className="text-3xl">
              <AiFillMeh />
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-medium leading-5 cursor-pointer text-xs">
            {user.username}
          </span>
          <span className="font-light leading-5 text-xs">
            5tys. oberwujących
          </span>
        </div>
      </div>
    </div>
  );
};
export default PinThumb;
