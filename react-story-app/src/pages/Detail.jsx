import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoryDetail from '../components/StoryDetail';

const Detail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch story');
        }
        const data = await response.json();
        setStory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {story ? <StoryDetail story={story} /> : <div>No story found</div>}
    </div>
  );
};

export default Detail;