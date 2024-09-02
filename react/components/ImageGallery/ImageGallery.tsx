import React, { useState } from 'react';
import './global.css';

// URLs dos placeholders
const placeholder1 = 'https://brastemp.vtexassets.com/arquivos/ids/219095-500-500?v=637497987961230000&width=500&height=500&aspect=true';
const placeholder2 = 'https://brastemp.vtexassets.com/arquivos/ids/219093-500-500?v=637497987562370000&width=500&height=500&aspect=true';
const placeholder3 = 'https://brastemp.vtexassets.com/arquivos/ids/219094-500-500?v=637497987715100000&width=500&height=500&aspect=true';

interface Image {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Defina as imagens diretamente no componente
  const images: Image[] = [
    { src: placeholder1, alt: 'Image 1' },
    { src: placeholder2, alt: 'Image 2' },
    { src: placeholder3, alt: 'Image 3' },
  ];

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
              className="thumbnail"
            />
          ))}
        </div>
      </div>
      <div className="selected-image-container">
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="selected"
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
