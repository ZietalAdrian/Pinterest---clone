import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import usePhotos from "./usePhotos";
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

  const { images, setImages, setRandom, random, loading, error, hasMore } = usePhotos(
    query,
    page
  );

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

  const onOpen = (bool) => {
    setModal(true);
    setLogin(bool);
  };

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
          onOpen,
          modal,
          setModal,
          login,
          setLogin,
          setToast,
        }}
      >
        <Header
          onSearchSubmit={onSearchSubmit}
          input={input}
          setRandom={setRandom}
          random={random}
          setPickedImg={setPickedImg}
          setPage={setPage}
        />
        <Board
          pins={images}
          setPickedImg={setPickedImg}
          pickedImg={pickedImg}
          loading={loading}
          error={error}
          hasMore={hasMore}
          random={random}
        />
      </PinContext.Provider>
      <Toast toast={toast} setToast={setToast} />
    </>
  );
}

export default App;
