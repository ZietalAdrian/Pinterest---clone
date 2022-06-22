import axios from "axios";
import { useEffect, useState } from "react";

export default function useSearchPins(query, page) {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios({
      method: "GET",
      url: "https://api.unsplash.com/search/photos",
      headers: {
        Authorization: "Client-ID 0B3A8r9TK-9v3OuxKhMG01aeMhj0ofcUBWfIswPk3BM",
      },
      params: { query, page },
    })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw Error("Nie możemy pobrać danych z tego źródła");
        }
        if (res.data.total <= 0) {
          throw Error("Brak podanej frazy w bazie");
        }
        setImages((prev) => {
          return [...prev, ...res.data.results];
        });
        setHasMore(res.data.results.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [query, page]);

  return { images, hasMore, loading, error, setImages };
}

export const useRandomPins = () => {
  const [randImg, setRandImg] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    setLoading2(true);
    setError2(null);

    axios({
      method: "GET",
      url: "https://api.unsplash.com/photos/random",
      headers: {
        Authorization: "Client-ID 0B3A8r9TK-9v3OuxKhMG01aeMhj0ofcUBWfIswPk3BM",
      },
      params: { count: 2 },
      // params: { count: 20 },
    })
      .then((res) => {
        console.log("res.data...")
        if (!res.statusText === "OK") {
          throw Error("Nie możemy pobrać danych z tego źródła");
        }

        setRandImg(res.data);
        setLoading2(false);
      })
      .catch((err) => {
        setLoading2(false);
        setError2(err.message);
      })
  }, []);
  return { randImg, loading2, error2, setRandom, random, setRandImg };
};
