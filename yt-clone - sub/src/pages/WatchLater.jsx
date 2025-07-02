import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";

function WatchLater() {
  const [watchLaterList, setWatchLaterList] = useState(
    JSON.parse(sessionStorage.getItem("watchLater") || "[]")
  );

  const removeFromWatchLater = (id) => {
    const updated = watchLaterList.filter((v) => v.id !== id);
    setWatchLaterList(updated);
    sessionStorage.setItem("watchLater", JSON.stringify(updated));
  };

  return (
    <div className="row">
      {watchLaterList.map((video) => (
        <div className="col-md-4" key={video.id}>
          <VideoCard video={video} />
          <button
            className="btn btn-sm btn-outline-danger mb-3"
            onClick={() => removeFromWatchLater(video.id)}
          >
            Remove from Watch Later
          </button>
        </div>
      ))}
    </div>
  );
}

export default WatchLater;