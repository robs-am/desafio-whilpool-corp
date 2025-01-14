import React from 'react';
import ReactPlayer from 'react-player';
import "./global.css";

interface BannerContent {
  link?: string;
  videoUrl?: string;
  image?: string;
  altText?: string;
}

const BannerContent = ({ link, videoUrl, image, altText = "Descrição do banner" }: BannerContent) => {
  return (
    <div className="banner-content__container relative">
      {videoUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Veja o vídeo relacionado">
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
        </a>
      )}

      {image && !videoUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Veja mais detalhes">
          <div className="image-container">
            <img src={image} alt={altText} className="full-width-image" />
          </div>
        </a>
      )}
    </div>
  );
};

BannerContent.schema = {
  title: "Banner Content",
  description: "Banner com vídeo ou imagem",
  type: "object",
  properties: {
    link: {
      title: "Link",
      description: "URL para o qual o banner deve apontar ao clicar",
      type: "string",
      default: "",
    },
    videoUrl: {
      title: "URL do vídeo",
      description: "URL do vídeo proveniente do Youtube, Vimeo ou DailyMotion",
      type: "string",
    },
    image: {
      title: "Imagem",
      description: "Imagem do banner",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "image-uploader",
      },
    },
    altText: {
      title: "Texto Alternativo",
      description: "Texto alternativo para descrever a imagem do banner",
      type: "string",
      default: "Descrição do banner",
    },
  },
};

export default BannerContent;
