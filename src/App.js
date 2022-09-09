import "./App.css";
import openSocket from "socket.io-client";
import Header from "./components/Header";
import Register from "./components/Register";

// const socket = openSocket(
//   "http://49eb-2804-14c-121-8d69-5829-be89-e1db-d841.sa.ngrok.io",
//   {
//     path: "/socket",
//     transports: ["websocket"],
//     query: {},
//     extraHeaders: {}
//   }
// );

function App() {
  // const showVideo = () => {
  //   socket.emit("showVideo", { message: "Hello World" });
  // };

  return (
    <div className="App">
      {/* <Header /> */}
      <Register />
      {/* <button onClick={showVideo}>Show Video</button> */}
    </div>
  );
}

export default App;
