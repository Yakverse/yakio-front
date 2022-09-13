import "./App.scss";
import openSocket from "socket.io-client";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Video />
    </div>
  );
}

export default App;
