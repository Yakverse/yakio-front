import "../styles/Profile.scss";
import Joao from "../assets/joao.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <img src={Joao} className="profile-pic"></img>
        <button className="profile-edit-button">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>

        <div className="profile-division"></div>

        <div className="profile-info-container">
          <div className="profile-row">
            <label className="profile-label" htmlFor="profile-username">
              Username:
            </label>
            <p className="profile-info" id="profile-username">
              Jaogui123
            </p>
          </div>

          <div className="profile-row">
            <label className="profile-label" htmlFor="profile-email">
              Email:
            </label>
            <p className="profile-info" id="profile-email">
              joao.guilherme@gmail.com
            </p>
          </div>

          <div className="profile-row">
            <label className="profile-label" htmlFor="profile-since">
              Member Since:
            </label>
            <p className="profile-info" id="profile-since">
              20/09/2022
            </p>
          </div>

          <div className="profile-row">
            <label className="profile-label" htmlFor="profile-bio">
              Bio:
            </label>
            <textarea id="profile-bio"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
