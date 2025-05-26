import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const FILTERS = [
  { key: "all", label: "All" },
  { key: "new", label: "New" },
  { key: "in progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];
const Home = () => {
  const [stories, setStories] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const ItemsPerPage = 8;
  const API = "https://mxpertztestapi.onrender.com/api/sciencefiction";

  const fetchStories = async () => {
    const cached = localStorage.getItem("stories");
    if (cached) {
      setStories(JSON.parse(cached));
      return;
    }
    try {
      const response = await fetch(API);
      const result = await response.json();
      setStories(result);
      localStorage.setItem("stories", JSON.stringify(result));
    } catch (e) {
      console.log("error fetching api", e);
    }
  };
  const filteredStories =
    filter === "all"
      ? stories
      : stories.filter(
          (story) =>
            (story.Status || "new").toLowerCase() === filter.toLowerCase()
        );
  useEffect(() => {
    fetchStories();
  }, []);

  const totalPages = Math.ceil(stories.length / ItemsPerPage);
  const idxOfLast = currPage * ItemsPerPage;
  const idxOfFirst = idxOfLast - ItemsPerPage;
  const currStories = filteredStories.slice(idxOfFirst, idxOfLast);

  const handleFilter = (key) => {
    setFilter(key);
    setCurrPage(1);
  };
  const handleNext = () => {
    setCurrPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrPage((prev) => Math.max(prev - 1, 1));
  };

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="home-bg">
      <h1 className="home-title">Science Fiction Stories</h1>
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${
              filter === f.key ? "active" : ""
            } ${f.key.replace(" ", "-")}`}
            onClick={() => handleFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="story-grid">
        {currStories.map((item) => (
          <div
            className="story-card"
            key={item._id}
            onClick={() => handleCardClick(item._id)}
          >
            <img
              className="story-img"
              src={`https://ik.imagekit.io/dev24/${item.Image[0]}`}
              alt={item.Title}
            />
            <h3 className="story-title">{item.Title}</h3>
            <div
              className={`story-status ${item.Status?.toLowerCase() || "new"}`}
            >
              {item.Status || "New"}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currPage === 1}>
          Previous
        </button>
        <span>
          Page {currPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
