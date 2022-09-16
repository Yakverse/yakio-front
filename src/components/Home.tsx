import YakLogo from "../assets/yaklogosemfundo.png";
import "../styles/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faSignature,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <form className="home-room-code">
          <h2 className="home-room-code-title">Enter your room code:</h2>
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            name="room-nickname"
            placeholder="User 1234"
          />
          <label htmlFor="code">Room code:</label>
          <input
            type="number"
            id="code"
            name="room-code"
            placeholder="R0OM-C0D3"
          />
          <div className="home-room-button-container">
            <button type="submit" className="home-room-button">
              JOIN ROOM
            </button>
            <button className="home-room-button">CREATE A ROOM</button>
          </div>
        </form>

        <div className="home-division"></div>

        <div className="home-instructions">
          <h2 className="home-instructions-title">How to join your friends!</h2>
          <div className="home-instructions-steps">
            <div className="home-instruction-box">
              <h4 className="home-instruction-info">
                Create a room, or get a code!
              </h4>
              <FontAwesomeIcon
                className="home-instruction-icon"
                icon={faPencil}
              />
            </div>
            <div className="home-instructions-division"></div>
            <div className="home-instruction-box">
              <h4 className="home-instruction-info">
                Choose your nick and enter the Room code
              </h4>
              <FontAwesomeIcon
                className="home-instruction-icon"
                icon={faSignature}
              />
            </div>
            <div className="home-instructions-division"></div>
            <div className="home-instruction-box">
              <h4 className="home-instruction-info">
                Watch with your friends!
              </h4>
              <FontAwesomeIcon
                className="home-instruction-icon"
                icon={faUserGroup}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <img src={YakLogo} alt="Yak Logo" className="home-footer-logo" />
        <h1 className="home-footer-title">YakIO</h1>
      </div>
    </div>
  );
};

export default Home;
