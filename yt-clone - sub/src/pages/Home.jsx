import React from "react";
import dummyVideos from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";
import Timer from "../components/Timer";

function Home() {
  return (
    <div>
      <Timer />
      <div className="row">
        {dummyVideos.map((video) => (
          <div className="col-md-4" key={video.id}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;