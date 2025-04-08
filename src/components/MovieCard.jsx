import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 rounded-xl pr-4 transform transition-transform duration-300 hover:scale-105">
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg shadow-md transition duration-300 hover:shadow-[0_0_25px_5px_rgba(255,182,193,0.6)] object-cover aspect-square w-full"
      />
    </div>
  );
};

export default MovieCard;
