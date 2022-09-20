import YakLogo from "../assets/yaklogosemfundo.png";
import "../styles/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faSignature,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";

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
            placeholder="User1234"
            minLength={3}
            maxLength={10}
            required
          />
          <label htmlFor="code">Room code:</label>
          <input
            type="number"
            id="code"
            name="room-code"
            placeholder="R0OM-C0D3"
            required
          />
          <div className="home-room-button-container">
            <button type="submit" className="home-room-button">
              <Link to="/video">JOIN ROOM</Link>
            </button>
            <button className="home-room-button">
              <Link to="/register">CREATE A ROOM</Link>
            </button>
          </div>
        </form>

        <div className="home-division"></div>

        <div className="home-instructions">
          <h2 className="home-instructions-title">How to join your friends</h2>
          <div className="home-non-carousel">
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

          <div className="home-carousel">
            <Carousel
              cols={1}
              rows={1}
              gap={30}
              className="home-instructions-steps"
            >
              <Carousel.Item>
                <div className="home-instruction-box">
                  <h4 className="home-instruction-info">
                    Create a room, or get a code!
                  </h4>
                  <FontAwesomeIcon
                    className="home-instruction-icon"
                    icon={faPencil}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="home-instruction-box">
                  <h4 className="home-instruction-info">
                    Choose your nick and enter the Room code
                  </h4>
                  <FontAwesomeIcon
                    className="home-instruction-icon"
                    icon={faSignature}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="home-instruction-box">
                  <h4 className="home-instruction-info">
                    Watch with your friends!
                  </h4>
                  <FontAwesomeIcon
                    className="home-instruction-icon"
                    icon={faUserGroup}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
