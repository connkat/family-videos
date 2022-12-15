import { useState, useEffect } from "react";

function ListVideos() {
  const [videos, setVideos] = useState([]);
  const getVideos = async (e) => {
    try {
      const res = await fetch("http://localhost:4000/videos");
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getVideos();
  });
  return (
    <div className="list-videos">
      Videos:
      {videos}
    </div>
  );
}

export default ListVideos;
