import styles from "../styles/navbar.module.css";

import Jaapi from "../images/jaapi_icon.png";
import Logo from "../images/Nav_Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.iconDiv}>
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className={styles.listDiv}>
        <ul>
          <li>
            <Link to={"/"}>
              <div>
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/gallery"}>
              <div>
                Gallery
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/members"}>
              <div>
                Members
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.jaapiDiv}>
        <img src={Jaapi} alt="Jaapi"></img>
      </div>
    </div>
  );
};

export default Navbar;
