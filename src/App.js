import { Fragment } from "react";

import ListVideos from "./components/ListVideos";
import FilterBar from "./components/FilterBar/FilterBar";
import VideoCard from "./components/VideoCard";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
      <div>
        <Header />
        <FilterBar />
        <VideoCard />
        <ListVideos />
      </div>
  );
}

export default App;
