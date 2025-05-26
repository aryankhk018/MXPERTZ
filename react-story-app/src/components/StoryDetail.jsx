import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const API = `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`;

  const fetchStoryDetail = async () => {
    try {
      const response = await fetch(API);
      const result = await response.json();
      setStory(result);
    } catch (e) {
      console.log("Error fetching story detail", e);
    }
  };

  useEffect(() => {
    fetchStoryDetail();
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="story-detail">
      <h1>{story.Title}</h1>
      <img src={`https://ik.imagekit.io/dev24/${story.Image[0]}`} alt={story.Title} />
      <p>{story.Description}</p>
      <p><strong>Author:</strong> {story.Author}</p>
      <p><strong>Published:</strong> {story.PublishedDate}</p>
    </div>
  );
};

export default StoryDetail;