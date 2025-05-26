import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./StoryDetail.css";

const TABS = [
  { key: "word-explorer", label: "Word Explorer" },
  { key: "story-adventure", label: "Story Adventure" },
  { key: "brain-quest", label: "Brain Quest" },
];

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(
          `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
        );
        const data = await res.json();
        setStory(data);
      } catch (e) {
        setStory(null);
      }
    };
    fetchStory();
  }, [id]);

  if (!story) {
    return (
      <div className="story-detail-bg">
        <h2 className="loading">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="story-detail-bg">
      <div className="story-detail-header">
        <h1>
          <span className="highlight">{story.Title?.split(" ")[0]}</span>{" "}
          {story.Title?.split(" ").slice(1).join(" ")}
        </h1>
        <div className="tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="story-detail-content">
        {activeTab === "word-explorer" && (
          <div className="word-explorer-tab">
            <div className="word-explorer-left">
              <div className="word-card">
                <h2>
                  Correction <span className="noun">(Noun)</span>
                </h2>
                <p className="desc">
                  The story is about a city where we assume that a city known as{" "}
                  <b>correction</b>. The story is about a city where we assume
                  that a city known as <b>correction</b>.
                </p>
                <img
                  className="word-img"
                  src={`https://ik.imagekit.io/dev24/${story.Image?.[0]}`}
                  alt={story.Title}
                />
                <div className="synonyms">
                  <span className="label">Synonyms:</span>
                  <span className="value">hustle, flee, joy, step forward</span>
                </div>
                <div className="antonyms">
                  <span className="label">Antonyms:</span>
                  <span className="value">hustle, flee, joy, step forward</span>
                </div>
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn">&#8592;</button>
                <button className="carousel-btn">&#8594;</button>
              </div>
            </div>
            <div className="word-explorer-right">
              <div className="img-grid">
                {story.Image?.map((img, idx) => (
                  <div className="img-card" key={idx}>
                    <img
                      src={`https://ik.imagekit.io/dev24/${img}`}
                      alt={`Story visual ${idx + 1}`}
                    />
                    <p>
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet is
                      a dummy text that is a dummy text that is.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "story-adventure" && (
          <div className="tab-content">
            <h2>Story Adventure</h2>
            <p>{story.Description || "Adventure content goes here."}</p>
          </div>
        )}
        {activeTab === "brain-quest" && (
          <div className="tab-content">
            <h2>Brain Quest</h2>
            <p>Brain quest content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryDetail;
