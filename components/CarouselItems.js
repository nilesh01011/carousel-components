import React from 'react';

function CarouselItem({ item, width }) {
  return (
    <div
      className="carousel-item"
      // style={{ width: width }}
    >
      <div></div>
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};

export default CarouselItem;