import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
function AnimeCard() {
  return (
    <div className="anime-card-parent position-relative">
      <Link className="anime-card" to={"/test"}>
        <img
          src="https://cdn.myanimelist.net/images/anime/1441/122795.jpg"
          alt="img"
          className="anime-card__img img-fluid"
        />
        <span className="anime-card__episode-num text-white bg-dark p-2">
          ep 1500
        </span>
        <h3 className="anime-card__title fs-6 mb-0 text-center py-3 px-1 text-white bg-dark">
          Lorem ipsum dolor....
        </h3>

        <span className="anime-card__play-icon">
          <BsPlayCircle className="fs-1 text-primary" />
        </span>
      </Link>

      <div className="anime-card__details bg-dark text-white pt-3">
        <div className="d-flex justify-content-between align-items-start px-3 mb-2">
          <h3 className="anime-card__details__title fs-5 mb-0">
            Lorem ipsum dolor sit...
          </h3>
          <div className="anime-card__details__add-favorite fs-4">
            <AiOutlineHeart />
          </div>
        </div>
        <p className="anime-card__details__des px-3 text-white-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          itaque. Suscipit non enim repellendus sequi, exercitationem veritatis
          autem porro asperiores.
        </p>

        <ul className="anime-card__details__list px-3">
          <li className="anime-card__details__item text-white-50">
            Other names: Edens Zero
          </li>
          <li className="anime-card__details__item text-white-50">
            Scores: 5.95
          </li>
          <li className="anime-card__details__item text-white-50">
            Date aired: Apr 5, 2017 to ?
          </li>
          <li className="anime-card__details__item text-white-50">
            Status: Currently Airing
          </li>
          <li className="anime-card__details__item text-white-50">
            Genre:{" "}
            {[
              "Action,",
              "Adventure,",
              "Martial,",
              "Arts,",
              "Shounen,",
              "Super Power",
            ].map((name) => {
              return (
                <a href="/" className="me-1" key={name}>
                  {name}
                </a>
              );
            })}
          </li>
        </ul>

        <Link
          className="anime-card__details__link d-block text-center py-2 text-white bg-primary fs-5 text-capitalize"
          to={"/"}
        >
          <BsPlayCircle className="mb-1 me-1" /> watch now
        </Link>
      </div>
    </div>
  );
}

export default AnimeCard;
