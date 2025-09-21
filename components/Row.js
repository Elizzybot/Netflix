import axios from "axios";
import { useEffect, useState } from "react";

export default function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex space-x-2 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`object-cover transition-transform duration-200 hover:scale-110 ${
              isLarge ? "h-72" : "h-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}