import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Board from "./components/Board";
import Header from "./components/Header";
import useApi from "./API/useApi";
import Toast from "./components/Toast";
import { PinContext } from "./context/PinContext";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [toast, setToast] = useState(false);
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(true);
  const [pickedImg, setPickedImg] = useState(null);

  const { images, setImages, setRandom, random, loading, error, hasMore } =
    useApi(query, page);

  const { i18n } = useTranslation();

  const changeLang = (language) => {
    return () => i18n.changeLanguage(language);
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const openModal = (isLoginModal) => {
    setModal(true);
    setLogin(isLoginModal);
  };
  const handleOnClickOpenModalLogin = () => openModal(true);
  const handleOnClickOpenModalSingIn = () => openModal(false);
  const closeModal = () => setModal(false);
  const openToast = () => setToast(true);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setRandom(false);
    setPickedImg(null);
    setImages([]);
    setQuery(input);
    setPage(1);
  };

  return (
    <>
      <PinContext.Provider
        value={{
          images,
          setQuery,
          setPage,
          setImages,
          setInput,
          modal,
          login,
        }}
      >
        <Header
          onSearchSubmit={onSearchSubmit}
          input={input}
          openModal={openModal}
          closeModal={closeModal}
          openToast={openToast}
          handleOnClickOpenModalLogin={handleOnClickOpenModalLogin}
          handleOnClickOpenModalSingIn={handleOnClickOpenModalSingIn}
          changeLang={changeLang}
        />
        <Board
          pins={images}
          setPickedImg={setPickedImg}
          pickedImg={pickedImg}
          loading={loading}
          error={error}
          hasMore={hasMore}
          random={random}
          closeModal={closeModal}
          openToast={openToast}
          handleOnClickOpenModalSingIn={handleOnClickOpenModalSingIn}
        />
      </PinContext.Provider>
      <Toast toast={toast} setToast={setToast} />
    </>
  );
}

export default App;
