import React, { useState } from "react";

const VideoPlayer = ({ videoUrl, setShowVideo }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center z-20"
      onMouseDown={() => setShowVideo(false)}
    >
      <iframe
        className="lg:h-4/5 lg:w-4/5 w-5/6 h-5/6"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const VideoSection = ({ image = "./video-cover-home.webp" }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative">
      <img src={image} className="video-cover" alt="Video Cover" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          className="flex items-center justify-center w-16 h-16 bg-white rounded-full"
          onClick={() => {
            setShowVideo(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </button>
      </div>

      {showVideo && (
        <VideoPlayer
          setShowVideo={setShowVideo}
          videoUrl="https://www.youtube.com/embed/Tm9nLdEJvfc" // Replace with your actual YouTube video URL
        />
      )}
    </section>
  );
};

export default VideoSection;
