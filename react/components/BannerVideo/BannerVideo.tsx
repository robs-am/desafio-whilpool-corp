import React from "react";
import ReactPlayer from 'react-player'
import "./global.css";

interface BannerVideo {
  link: string;
  videoUrl: string;
}

const BannerVideo = ({ link, videoUrl }: BannerVideo) => {
  return (
    <div className="banner-video__container relative">
      {link && (
        <button className="btn__banner-video">
          <a href={link} className="link-video" target="_blank">
            {videoUrl}
          </a>
        </button>
      )}

      <div className="video-container w-full">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          className="react-player"
          playing={true}
          muted={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default BannerVideo;

BannerVideo.schema = {
  title: "Video",
  description: "Video da marca",
  type: "object",
  properties: {
    videoUrl: {
      title: "URL do video",
      description: "URL do video proveniente do Youtube, Vimeo ou DailyMotion",
      type: "string",
    },
    link: {
      title: "Link",
      description: "URL para o qual o botão deve apontar",
      type: "string",
      default: "https://www.youtube.com",
    },
  },
};
