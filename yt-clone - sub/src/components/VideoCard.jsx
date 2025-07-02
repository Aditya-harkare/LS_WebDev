import React, { useState, useEffect } from "react";

function VideoCard({ video }) {
  const [liked, setLiked] = useState(false);
  const [watchLaterList, setWatchLaterList] = useState(
    JSON.parse(sessionStorage.getItem("watchLater") || "[]")
  );

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLaterList));
  }, [watchLaterList]);

  const toggleLike = () => setLiked(!liked);

  const addToWatchLater = () => {
    if (!watchLaterList.find((v) => v.id === video.id)) {
      setWatchLaterList([...watchLaterList, video]);
    }
  };

  return (
    <div className="card mb-3">
      <img src={video.thumbnail} className="card-img-top" alt="thumbnail" />
      <div className="card-body w-90">
        <h5>{video.title}</h5>
        <p className="text-muted ">
          {video.channel} • {video.views} views • {video.time}
        </p>
        <button className="btn btn-sm btn-outline-danger me-2 " onClick={toggleLike}>
          ❤️ {liked ? "Liked" : "Like"}
        </button>
        <button className="btn btn-sm btn-outline-primary" onClick={addToWatchLater}>
          ➕ Watch Later
        </button>
      </div>
    </div>
  );
}

export default VideoCard;