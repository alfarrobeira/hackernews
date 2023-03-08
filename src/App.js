import React, { useEffect, useState } from "react";
import "./App.css";
import StoryList from "./components/StoryList";
import SearchBar from "./components/SearchBar";

function App() {
  const URL_TOPSTORIES =
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

  const [stories, setStories] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const storiesPerPage = 20;
  const [loading, setLoading] = useState(true);

  // doing it this way would be much nicer ;-) including error handling:
  // https://codesandbox.io/embed/hackernews-top-10-posts-h73km
  // my solution... just to prove that it works using all those promises ;-)
  const getStories = () => {
    // fetch all top stories
    fetch(URL_TOPSTORIES)
      .then((response) => response.json())
      .then((jsonIds) => {
        const promises = jsonIds.slice(0, 10).map((id) => {
          // fetch story with ID
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          )
            .then((response) => response.json())
            .then((data) => {
              return data;
            })
            .catch((e) => console.log(e));
        });
        Promise.all(promises).then((results) => {
          setStories(results);
          setLoading(false);
        });
      })
      .catch((e) => console.log(e));
  };

  // called on mount
  useEffect(() => {
    setLoading(true);
    getStories();
    //console.log(stories);
  }, [query, page]);

  return (
    <div className="App">
      <SearchBar />
      {loading ? <div>"loading..."</div> : <StoryList stories={stories} />}
    </div>
  );
}

export default App;
