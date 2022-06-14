import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className="nav-ham">
      <ul className="ul-links-nav-ham">
        <Link to="/home">
          <li className="link-ham">
            <img className="icon-link" src="/images/home-icon.svg" alt="" />
            <span className="text-link">HOME</span>
          </li>
        </Link>

        <li className="link-ham">
          <img className="icon-link" src="/images/search-icon.svg" alt="" />
          <span className="text-link">SEARCH</span>
        </li>

        <li className="link-ham">
          <img className="icon-link" src="/images/watchlist-icon.svg" alt="" />
          <span className="text-link">WATCHLIST</span>
        </li>

        <li className="link-ham">
          <img className="icon-link" src="/images/orIginal-icon.svg" alt="" />
          <span className="text-link">ORIGINALS</span>
        </li>

        <li className="link-ham">
          <img className="icon-link" src="/images/movie-icon.svg" alt="" />
          <span className="text-link">MOVIES</span>
        </li>

        <li className="link-ham">
          <img className="icon-link" src="/images/series-icon.svg" alt="" />
          <span className="text-link">SERIES</span>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
