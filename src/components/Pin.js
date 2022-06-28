import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { AiFillMeh } from "react-icons/ai";
import AuthenticationBoard from "./AuthenticationBoard";

const Pin = ({
  obj,
  handleOnSearchTag,
  onOpen,
  modal,
  setModal,
  login,
  setLogin,
  setToast,
}) => {
  const {
    alt,
    urls,
    alt_description,
    user,
    tags,
    description,
  } = obj;

  const [scroll, setScroll] = useState(false);

  const showTags = () => {
    const tagsToShow = tags.map((tag, index) => {
      return (
        <div
          key={index}
          onClick={() => handleOnSearchTag(tag.title)}
          className="bg-gray-200 rounded-xl px-2 py-1 mr-1 cursor-pointer font-semibold text-xs hover:text-gray-500 capitalize"
        >
          <span className="hover:underline">{tag.title}</span>
        </div>
      );
    });
    return <div className="flex my-2">{tagsToShow}</div>;
  };

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [scroll]);

  const btnOdwiedz = () => window.open("https://unsplash.com/");

  return (
    <>
      <div className="flex w-[1000px] my-10 mx-auto">
        <div className="w-6/12 rounded-2xl cursor-pointer relative">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={urls?.regular}
            alt={alt}
          />
          <div className="z-10 bg-transparent hover:bg-black/40 absolute left-0 top-0 w-full h-full rounded-2xl">
            <div
              onClick={() => onOpen(false)}
              className="text-[0px] hover:text-lg z-20 text-center mt-16 w-full h-full text-white"
            >
              <span className="block mx-auto w-52 font-semibold leading-6">
                Kliknij, aby jak najlepiej wykorzystać ten pomysł, tworzac
                darmowe konto
              </span>
              <AuthenticationBoard
                open={modal}
                onClose={() => setModal(false)}
                login={login}
                setLogin={setLogin}
                setToast={setToast}
              />
            </div>
          </div>
        </div>
        <div className="w-6/12 mt-8 ml-6">
          <div className="flex justify-between mx-6">
            <div className="flex">
              <span className="text-2xl mr-5 cursor-pointer">
                <FiUpload strokeWidth={3.5} />
              </span>
              <span className="text-2xl cursor-pointer">
                <BsThreeDots strokeWidth={0.7} />
              </span>
            </div>
            <div className="flex">
              <button
                onClick={btnOdwiedz}
                className="bg-gray-200 rounded-3xl p-3 tracking-wider mr-2 font-semibold"
              >
                Odwiedź
              </button>
              <button className="text-white bg-red-600 rounded-3xl p-3 tracking-wider font-medium">
                Zapisz
              </button>
            </div>
          </div>
          <div className="flex flex-col m-3">
            <span className="font-light text-sm">
              Artykuł z{" "}
              <a href="https://unsplash.com/" className="font-bold">
                unsplash.com
              </a>
            </span>
            <span className="my-3 font-bold text-3xl">{alt_description}</span>
            {description && <span className="mb-3">{description}</span>}
            <div className="flex">
              <div className="rounded-full w-14 h-14 mr-2 cursor-pointer">
                {user.profile_image.medium ? (
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.profile_image.medium}
                    alt=""
                    onLoad={() => setScroll((prev) => !prev)}
                  />
                ) : (
                  <span className="text-6xl">
                    <AiFillMeh />
                  </span>
                )}
              </div>
              <div className="flex flex-col mb-4 mt-2">
                <span className="font-medium leading-5 cursor-pointer">
                  {user?.username}
                </span>
                <span className="font-light leading-5">5tys. oberwujących</span>
              </div>
            </div>
            {tags && showTags()}
            <button className="flex my-3 font-semibold text-xs">
              Więcej informacji...
            </button>
          </div>
        </div>
      </div>
      <span className="block text-center font-semibold text-xl">
        Więcej w tym stylu
      </span>
    </>
  );
};

export default Pin;
