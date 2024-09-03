import React, { useState, useEffect } from 'react';
import './global.css';

const defaultImages = [
  { src: 'https://brastemp.vtexassets.com/arquivos/ids/219095-500-500?v=637497987961230000&width=500&height=500&aspect=true', alt: 'Descrição da Imagem 1' },
  { src: 'https://brastemp.vtexassets.com/arquivos/ids/219093-500-500?v=637497987562370000&width=500&height=500&aspect=true', alt: 'Descrição da Imagem 2' },
  { src: 'https://brastemp.vtexassets.com/arquivos/ids/219094-500-500?v=637497987715100000&width=500&height=500&aspect=true', alt: 'Descrição da Imagem 3' },
];

interface Image {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images?: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = defaultImages }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery-container">

      <div className="gallery">
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image)}
              className={`thumbnail ${selectedImage?.src === image.src ? 'selected' : ''}`}
              aria-label={`Selecionar ${image.alt}`}
            />
          ))}
        </div>
      </div>
      <div className="selected-image-container">
        {selectedImage && (
          <figure>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="selected"
              loading="lazy"
            />

          </figure>
        )}
      </div>
    </div>
  );
};

const imageGallerySchema = {
  "title": "Image Gallery",
  "description": "Uma galeria de imagens com miniaturas e imagem selecionada.",
  "type": "object",
  "properties": {
    "images": {
      "title": "Imagens",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "src": {
            "type": "string",
            "title": "URL da Imagem",
            "widget": {
              "ui:widget": "image-uploader",
            }
          },
          "alt": {
            "type": "string",
            "title": "Texto Alternativo",
            "default": "Imagem"
          }
        },
        "required": ["src", "alt"]
      }
    }
  },
  "required": []
};

const ImageGalleryWithSchema = Object.assign(ImageGallery, { schema: imageGallerySchema });

export default ImageGalleryWithSchema;
