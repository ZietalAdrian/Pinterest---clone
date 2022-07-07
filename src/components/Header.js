import React, { useContext } from "react";
import { BsPinterest } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";

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
}) => {
  const { setInput, modal, login } = useContext(PinContext);

  return (
    <div className="flex flex-col">
      <div className="flex m-4 items-center">
        <span>
          <a href="/">
            <button
              className="mx-2 cursor-pointer flex text-[#C8232C] font-semibold tracking-tight text-xl pb-1"
            >
              <BsPinterest size={25} color="#F00028" className="mr-1 pb-0" />
              Pinterest
            </button>
          </a>
        </span>
        <button
          onClick={openToast}
          className="cursor-pointer h-min px-2 py-1 rounded-lg hover:bg-gray-200"
        >
          <span className="font-semibold">Odkrywaj</span>
        </button>
        <div className="hidden md:flex border-2 rounded-3xl p-2 mx-3 w-full h-12">
          <span className="mt-[2px]">
            <GrFormSearch size={25} strokeOpacity="0.5" />
          </span>
          <form className="w-full">
            <input
              className="outline-none placeholder-gray-500 placeholder-opacity-50 w-full"
              type="text"
              placeholder="Wyszukaj..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <input type="submit" className="hidden" onClick={onSearchSubmit} />
          </form>
        </div>
        <div className="flex min-w-fit ml-auto">
          <div className="mr-2 cursor-pointer p-3 rounded-3xl hover:bg-gray-200">
            <button onClick={openModal} className="tracking-wide font-semibold">
              Zaloguj się
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
              Zarejestruj się
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
