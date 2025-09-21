import axios from "axios";
import { useEffect, useState } from "react";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
    }
    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <div className="h-[75vh] relative flex items-end p-6 bg-cover bg-center" 
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="relative z-10 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-sm line-clamp-3">{movie.overview}</p>
        <div className="mt-4 flex space-x-2">
          <button className="bg-white text-black px-4 py-2 rounded">Play</button>
          <button className="bg-gray-500 px-4 py-2 rounded">More Info</button>
        </div>
      </div>
    </div>
  );
}