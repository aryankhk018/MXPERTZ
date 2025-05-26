import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StoryCard from "../components/StoryCard";
import { fetchStories } from "../api/stories";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const ItemsPerPage = 8;

  useEffect(() => {
    const getStories = async () => {
      const result = await fetchStories();
      setStories(result);
    };
    getStories();
  }, []);

  const totalPages = Math.ceil(stories.length / ItemsPerPage);
  const idxOfLast = currPage * ItemsPerPage;
  const idxOfFirst = idxOfLast - ItemsPerPage;
  const currStories = stories.slice(idxOfFirst, idxOfLast);

  const handleNext = () => {
    setCurrPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div>
      <h1>Science Fiction Stories</h1>
      <div className="story-list">
        {currStories.map((item) => (
          <Link to={`/detail/${item._id}`} key={item._id}>
            <StoryCard story={item} />
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currPage === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;