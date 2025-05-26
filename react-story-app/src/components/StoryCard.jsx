import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story }) => {
  return (
    <div className="story-card">
      <Link to={`/detail/${story._id}`}>
        <img
          className="story-image"
          src={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
          alt={story.Title}
        />
        <h3 className="story-title">{story.Title}</h3>
      </Link>
    </div>
  );
};

export default StoryCard;