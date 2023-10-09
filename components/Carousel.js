import React, { useState } from 'react';
import CarouselItem from './CarouselItems';
function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: 'Baseball',
      description:
        'Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.',
    },
    {
      title: 'Walking',
      description:
        'Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ',
    },
    {
      title: 'Weights',
      description:
        'Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.',
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      {/* prev btn */}
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <span class="slideBtn prev">Prev</span>
      </button>
      {/* carousel */}
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={'100%'} />;
        })}
      </div>

      {/* next btn */}
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <span class="slideBtn next">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
