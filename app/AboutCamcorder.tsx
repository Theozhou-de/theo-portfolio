"use client";

import { useEffect, useState } from "react";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `00:${minutes}:${seconds}`;
}

export default function AboutCamcorder() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setElapsed((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="camcorder" data-playing={isPlaying}>
      <img
        className="camcorder-image"
        src="/theo-about-camera.png"
        alt="Theo 的灰色西装 Q 版个人形象"
      />
      <div className="camcorder-shade" aria-hidden="true" />
      <div className="camcorder-scanlines" aria-hidden="true" />

      <div className="camcorder-topbar" aria-hidden="true">
        <span className="camcorder-rec">
          <i />
          {isPlaying ? "REC" : "STBY"}
        </span>
        <span className="camcorder-time">{formatTime(elapsed)}</span>
        <span className="camcorder-battery">
          <i />
        </span>
      </div>

      <div className="camcorder-focus" aria-hidden="true">
        <i className="focus-corner focus-tl" />
        <i className="focus-corner focus-tr" />
        <i className="focus-corner focus-bl" />
        <i className="focus-corner focus-br" />
      </div>

      <button
        className="camcorder-control"
        type="button"
        aria-label={isPlaying ? "暂停自我介绍" : "播放自我介绍"}
        aria-pressed={isPlaying}
        onClick={() => setIsPlaying((current) => !current)}
      >
        <span className="control-ring">
          {isPlaying ? (
            <span className="pause-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          ) : (
            <span className="play-icon" aria-hidden="true" />
          )}
        </span>
      </button>

      <div className="camcorder-footer" aria-hidden="true">
        <span>THEO / INTRO FILM</span>
        <span>4K&nbsp;&nbsp;24FPS</span>
      </div>
    </div>
  );
}
