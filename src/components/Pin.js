import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { AiFillMeh } from "react-icons/ai";
import env from "react-dotenv";

import AuthenticationBoard from "./AuthenticationBoard";
import { t } from "i18next";

const Pin = ({
  pinObj,
  handleOnSearchTag,
  handleOnClickOpenModalSingIn,
  modal,
  login,
  setLogin,
  openToast,
  closeModal,
}) => {
  const { alt, urls, alt_description, user, tags, description } = pinObj;

  const [scroll, setScroll] = useState(false);

  const tagsToShow = tags?.map((tag, index) => {
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

  useEffect(() => {
    window.scrollTo(0, 100);
  }, [scroll]);

  const handleRedirect = () => window.open(env.UNSPLASH_URL);

  const handleOnScroll = () => setScroll((prev) => !prev);

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
              onClick={handleOnClickOpenModalSingIn}
              className="text-[0px] hover:text-lg z-20 text-center mt-16 w-full h-full text-white"
            >
              <span className="block mx-auto w-52 font-semibold leading-6">
                Kliknij, aby jak najlepiej wykorzystać ten pomysł, tworzac
                darmowe konto
              </span>
              <AuthenticationBoard
                open={modal}
                onClose={closeModal}
                login={login}
                setLogin={setLogin}
                openToast={openToast}
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
                onClick={handleRedirect}
                className="bg-gray-200 rounded-3xl p-3 tracking-wider mr-2 font-semibold"
              >
                {t("visit")}
              </button>
              <button className="text-white bg-red-600 rounded-3xl p-3 tracking-wider font-medium">
                {t("save")}
              </button>
            </div>
          </div>
          <div className="flex flex-col m-3">
            <span className="font-light text-sm">
              {t("articleFrom")}{" "}
              <a href={env.UNSPLASH_URL} className="font-bold">
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
                    onLoad={handleOnScroll}
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
                <span className="font-light leading-5">5tys. {t("followers")}</span>
              </div>
            </div>
            {tags && <div className="flex my-2 max-h-6">{tagsToShow}</div>}
            <button className="flex my-3 font-semibold text-xs">
              {t("moreInfo")}
            </button>
          </div>
        </div>
      </div>
      <span className="block text-center font-semibold text-xl">
        {t("moreLikeThis")}
      </span>
    </>
  );
};

export default Pin;
