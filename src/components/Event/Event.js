import React from 'react';
import imageLoader from '../../imageLoader';

const Event = ({ event, imageContext }) => {
  const imageSrc = imageLoader(imageContext, event.imageFilenameThumb);

  return (
    <div className="event" key={event.id}>
      <img src={imageSrc} className="poster" alt={event.title} />
    </div>
  );
};

export default Event;
