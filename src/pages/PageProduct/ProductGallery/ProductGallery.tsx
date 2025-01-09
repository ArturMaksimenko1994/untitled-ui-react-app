import React from 'react';
import './ProductGallery.css';
import Carousel from './ProductGalleryCarousel';
import Fancybox from './ProductGalleryFancybox';

interface ProductGalleryProps {
  images: Array<{
    sourceUrl: string;
    thumbUrl: string;
    altText: string;
  }>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {


  if (images.length === 0) {
    return <p>тут будет скелет</p>;
  }

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <Carousel
        options={{
          infinite: false,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="f-carousel__slide"
            data-fancybox="gallery"
            data-src={image.sourceUrl}
            data-thumb-src={image.thumbUrl}
          >
            <img
              alt={image.altText}
              src={image.sourceUrl}
              width="400"
              height="300"
            />
          </div>
        ))}
      </Carousel>
    </Fancybox>
  );
};

export default ProductGallery;
