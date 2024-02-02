import React, { useState } from 'react';
import {imageLoader,  formatDate }  from "../../utils";
// import imageLoader from '../../imageLoader';
import './ExpandedEventDetails.css'

// A simple spinner component
const Spinner = () => <div className="spinner"></div>;

const ExpandedEventDetails = ({ event, imageContext }) => {
  // State to track the loading state of the image
  const [isLoading, setIsLoading] = useState(true);

  // Handler for the image load event
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="expanded-event-details">
      {/* Display spinner while image is loading */}
      {isLoading && <Spinner />}

      {/* Event image */}
      <img
        src={imageLoader(imageContext, event.imageFilenameFull)}
        alt={event.title}
        onLoad={handleImageLoad}
        className="expanded-event-image"
      />

      {/* Event details text */}
      <div className="expanded-event-text">
        <h3>{event.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: event.summary }}></p>
        <p>Available: {formatDate(event.launchDate)}</p>

        {/* Learn More button */}
        <a href={event.learnMoreLink} target="_blank" rel="noopener noreferrer" className='blue-btn'>
          Learn More
        </a>

        {/* Pre Order Now button */}
        <a href={event.purchaseLink} target="_blank" rel="noopener noreferrer" className='red-btn'>
          Pre Order Now
        </a>
      </div>
    </div>
  );
};

export default ExpandedEventDetails;
