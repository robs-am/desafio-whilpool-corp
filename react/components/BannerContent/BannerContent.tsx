import React from 'react';
import ReactPlayer from 'react-player';
import "./global.css";

interface BannerContent {
  videoUrl?: string;
  image?: string;
}

const BannerContent = ({ videoUrl, image }: BannerContent) => {
  return (
    <div className="banner-content__container relative">
      {videoUrl && (
        <div className="video-container">
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
      )}

      {image && !videoUrl && (
        <div className="image-container">
          <img src={image} alt="Banner" className="full-width-image" />
        </div>
      )}
    </div>
  );
};

export default BannerContent;

BannerContent.schema = {
  title: "Banner Content",
  description: "Banner com vídeo ou imagem",
  type: "object",
  properties: {
    videoUrl: {
      title: "URL do vídeo",
      description: "URL do vídeo proveniente do Youtube, Vimeo ou DailyMotion",
      type: "string",
    },
    image: {
      title: 'Image',
      type: 'string',
      default: '',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
  },
};
