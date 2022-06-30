import axios from "axios";
import { useEffect, useState } from "react";

const client = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0B3A8r9TK-9v3OuxKhMG01aeMhj0ofcUBWfIswPk3BM",
  },
});

const usePhotos = (query, page) => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    console.log(random)
    if (!random) {
      client
        .get("/search/photos", {
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
            return [...new Set([...prev, ...res.data.results])];
          });
          setHasMore(res.data.results.length > 0);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    } else {
      client
        .get("/photos/random", {
          params: { count: 20 },
        })
        .then((res) => {
          if (!res.statusText === "OK") {
            throw Error("Nie możemy pobrać danych z tego źródła");
          }
          setImages((prev) => {
            return [...new Set([...prev, ...res.data])];
          });
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
    console.log(page)
  }, [random, query, page]);
  return { images, setImages, setRandom, random, loading, error, hasMore };
};

export default usePhotos;
