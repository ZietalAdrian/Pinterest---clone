import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import useSearchPins, { useRandomPins } from "./unsplash";
import Toast from "./components/Toast";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [toast, setToast] = useState(false);
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(true);

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

  const { images, hasMore, loading, error, setImages } = useSearchPins(
    query,
    page
  );
  const { randImg, loading2, error2, setRandom, random, setRandImg } =
    useRandomPins();

  const onOpen = (bool) => {
    setModal(true);
    setLogin(bool);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setRandom(false); 
    setRandImg([]);
    setImages([]);
    setQuery(input);
    setPage(1);
  };

  return (
    <>
      <Header
        setInput={setInput}
        setPage={setPage}
        setImages={setImages}
        setToast={setToast}
        onOpen={onOpen}
        onSearchSubmit={onSearchSubmit}
        input={input}
        modal={modal}
        login={login}
        setLogin={setLogin}
        setModal={setModal}
      />
      <Board
        pins={images}
        setQuery={setQuery}
        setPage={setPage}
        setImages={setImages}
        setInput={setInput}
        onOpen={onOpen}
        modal={modal}
        setModal={setModal}
        login={login}
        setLogin={setLogin}
        setToast={setToast}
        loading={loading}
        error={error}
        hasMore={hasMore}
        randImg={randImg.length !== 0 && randImg}
        setRandom={setRandom}
        random={random}
      />
      <Toast toast={toast} setToast={setToast} />
    </>
  );
}

export default App;
