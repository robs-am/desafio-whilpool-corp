import React, { useState } from 'react';
import './global.css';

// URLs dos placeholders
const placeholder1 = 'https://picsum.photos/600?random=1';
const placeholder2 = 'https://picsum.photos/600?random=2';
const placeholder3 = 'https://picsum.photos/600?random=3';

interface Image {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);


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
