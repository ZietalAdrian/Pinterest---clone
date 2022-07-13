import React, { useContext, useState } from "react";
import { BsPinterest } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { t } from "i18next";

import { PinContext } from "../context/PinContext";

import AuthenticationBoard from "./AuthenticationBoard";

const Header = ({
  onSearchSubmit,
  input,
  openModal,
  closeModal,
  openToast,
  handleOnClickOpenModalLogin,
  handleOnClickOpenModalSingIn,
  changeLang
}) => {
  const { setInput, modal, login } = useContext(PinContext);

  const [showLanguages, setShowLanguages] = useState(false);

  const changeLanguageBtns = () => {
    return (
      <div className="flex flex-col absolute -left-2 bg-gray-300 w-10 p-2 rounded-md">
        <button onClick={changeLang("en")} className="hover:text-lg border-b-2 border-dotted border-gray-400">
          en
        </button>
        <button onClick={changeLang("pl")} className="hover:text-lg">pl</button>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex m-4 items-center">
        <span>
          <a href="/">
            <button className="mx-2 cursor-pointer flex text-[#C8232C] font-semibold tracking-tight text-xl pb-1">
              <BsPinterest size={25} color="#F00028" className="mr-1 pb-0" />
              Pinterest
            </button>
          </a>
        </span>
        <button
          onClick={openToast}
          className="cursor-pointer h-min px-2 py-1 rounded-lg hover:bg-gray-200"
        >
          <span className="font-semibold">{t("explore")}</span>
        </button>
        <div className="hidden md:flex border-2 rounded-3xl p-2 mx-3 w-full h-12">
          <span className="mt-[2px]">
            <GrFormSearch size={25} strokeOpacity="0.5" />
          </span>
          <form className="w-full">
            <input
              className="outline-none placeholder-gray-500 placeholder-opacity-50 w-full"
              type="text"
              placeholder={`${t("search")}...`}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <input type="submit" className="hidden" onClick={onSearchSubmit} />
          </form>
        </div>
        <div className="flex min-w-fit ml-auto relative">
          <div
            className="mt-3 cursor-pointer"
            onMouseEnter={() => setShowLanguages(true)}
            onMouseLeave={() => setShowLanguages(false)}
          >
            <MdLanguage size={25} />
            {showLanguages && changeLanguageBtns()}
          </div>
          <div className="mr-2 cursor-pointer p-3 rounded-3xl hover:bg-gray-200">
            <button onClick={openModal} className="tracking-wide font-semibold">
              {t("logIn_1")}
            </button>
            <AuthenticationBoard
              open={modal}
              onClose={closeModal}
              login={login}
              openToast={openToast}
              handleOnClickOpenModalLogin={handleOnClickOpenModalLogin}
              handleOnClickOpenModalSingIn={handleOnClickOpenModalSingIn}
            />
          </div>
          <span className="bg-gray-200 rounded-3xl py-3 px-4 cursor-pointer hover:bg-gray-300 tracking-wide">
            <button
              onClick={handleOnClickOpenModalSingIn}
              className="tracking-wide font-semibold"
            >
              {t("signUp")}
            </button>
            <AuthenticationBoard
              open={modal}
              onClose={closeModal}
              login={login}
              openToast={openToast}
              handleOnClickOpenModalLogin={handleOnClickOpenModalLogin}
              handleOnClickOpenModalSingIn={handleOnClickOpenModalSingIn}
            />
          </span>
          <button onClick={openToast} className="text-2xl2 ml-2 cursor-pointer">
            <span>
              <RiArrowDownSLine />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
