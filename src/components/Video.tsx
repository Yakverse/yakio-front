import React from "react";
import io from "socket.io-client";
import { useRef } from "react";
import "../../node_modules/video-react/styles/scss/video-react.scss";
import {
  Player,
  ControlBar,
  PlayToggle,
  BigPlayButton,
  PlayerReference
} from "video-react";

const socketVideo = io("ws://0.tcp.sa.ngrok.io:17000/video", {
  transports: ["websocket"]
});

const Video = () => {
  const videoRef: any = useRef(null);

  const mediaSource = new MediaSource();
  const video = videoRef;
  video.src = URL.createObjectURL(mediaSource);
  const url = URL.createObjectURL(mediaSource);
  let sourceBuffer: null | SourceBuffer = null;

  mediaSource.addEventListener("sourceopen", () => {
    sourceBuffer = mediaSource.addSourceBuffer(
      'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    );
  });

  const requestChunk = (chunkSize: number) => {
    socketVideo.emit("requestChunk", chunkSize);
  };

  socketVideo.on("connect", () => {
    requestChunk(1);
  });

  const appendToSourceBuffer = (chunk: BufferSource) => {
    if (
      mediaSource.readyState === "open" &&
      sourceBuffer &&
      !sourceBuffer.updating
    ) {
      sourceBuffer.appendBuffer(chunk);
      requestChunk(5);
    } else {
      setTimeout(() => {
        appendToSourceBuffer(chunk);
      }, 1000);
    }

    // if (
    //   video.buffered.lenght &&
    //   video.buffered.end(0) - video.buffered.start(0) > 1200
    // ) {
    //   sourceBuffer.remove(0, video.buffered.end(0) - 1200);
    // }
  };

  socketVideo.on("chunk", (chunk: BufferSource) => {
    appendToSourceBuffer(chunk);
    console.log("Received chunk");
  });

  return (
    <div>
      <Player
        ref={videoRef}
        // id="area"
        // controls="controls"
        preload="metadata"
        src={url}
      >
        <BigPlayButton position="center" />
        {/* <ControlBar autoHide={false} disableDefaultControls={false}>
          <PlayToggle />
        </ControlBar> */}
      </Player>
    </div>
  );
};

export default Video;
