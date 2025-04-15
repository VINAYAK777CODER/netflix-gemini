import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[6.5rem] sm:min-w-[8rem] md:min-w-[12rem] rounded-xl transform transition-transform duration-300 hover:scale-105">
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg shadow-md transition duration-300 hover:shadow-[0_0_25px_5px_rgba(255,182,193,0.6)] object-cover w-full aspect-[2/3]"
      />
    </div>
  );
};

export default MovieCard;
