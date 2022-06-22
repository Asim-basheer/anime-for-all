import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
function TopAnime({ anime = [] }) {
  return (
    <div className="top-anime bg-dark text-white-50 p-3 rounded">
      <h2 className="mb-4 fw-bolder text-white fs-4">Top Anime</h2>
      {anime.map(({ name, views }, index) => {
        return (
          <Link
            className={`top-anime__box d-flex align-items-center ${
              index === 9 ? "" : "mb-3"
            }`}
            to="/"
            key={index}
          >
            <span
              className={`top-anime__num me-2 ${
                index === 0
                  ? "bg-white  text-dark active"
                  : "border text-white-50"
              }  rounded fw-bold fs-4`}
            >
              {index + 1}
            </span>
            <img
              src="https://via.placeholder.com/50x60/00ff00"
              alt=""
              className="me-2 rounded"
            />
            <div className="text-white-50">
              <h3 className="fs-5 mb-1 fw-bold">{name}</h3>
              <span className="fs-6">
                <AiFillEye className="mb-1 fw-normal" /> {views}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default TopAnime;
