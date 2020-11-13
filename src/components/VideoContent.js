import { useEffect, useRef, useState } from "react";
import styled from '@emotion/styled';
import Player from "@vimeo/player";

const VideoRoot = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000000;
  overflow: hidden;
`;

const VideoHolder = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  pointer-events: none;
  iframe {
    max-height: none !important;
    max-width: none;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 0;
    height: 100vh;
  }
`;

const VideoContent = ({ videoId, muted, pause }) => {
  const videoContainer = useRef(null);
  let player = useRef(null);
  const [id, setId] = useState(null);

  if (player.current) {
    player.current.setVolume(muted ? 0 : 1);
  }

  if (pause) {
    player.current && player.current.pause();
  } else {
    player.current && player.current.play();
  }

  useEffect(() => {
    if (id) {
      videoContainer.current.innerHTML = "";
      const videoDiv = document.createElement("div");
      videoContainer.current.appendChild(videoDiv);
      player.current = new Player(videoDiv, {
        id: id,
        title: false,
        controls: false,
        byline: false,
        autoplay: true,
        autopause: false,
        muted,
        loop: true,
        width: 4096,
        height: "auto",
      });
    }
  }, [id]);

  useEffect(() => {
    setId(videoId);
  }, [videoId]);

  return (
    <VideoRoot>
      <VideoHolder ref={videoContainer} />
    </VideoRoot>
  );
};

VideoContent.defaultProps = {
  muted: true,
  cover: false,
};

export default VideoContent;
