"use client";

import { useEffect, useRef, useState } from "react";

function formatTime(totalSeconds: number) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60).toString().padStart(2, "0");
  const seconds = (safeSeconds % 60).toString().padStart(2, "0");
  return `00:${minutes}:${seconds}`;
}

export default function AboutCamcorder() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.42 && !reducedMotion.matches) {
          void video.play().catch(() => setIsPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.42, 0.7] },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="camcorder-stage">
      <div className="camcorder-index" aria-hidden="true"><span>PORTRAIT</span><b>01</b></div>
      <div className="camcorder-orbit camcorder-orbit-one" aria-hidden="true" />
      <div className="camcorder-orbit camcorder-orbit-two" aria-hidden="true" />

      <div className="camcorder" data-playing={isPlaying} ref={frameRef}>
        <video
          className="camcorder-video"
          ref={videoRef}
          src="/theo-intro-film.mp4"
          poster="/theo-intro-poster.jpg"
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(event) => setElapsed(event.currentTarget.currentTime)}
          aria-label="Theo 个人介绍视频"
        />
        <div className="camcorder-shade" aria-hidden="true" />
        <div className="camcorder-scanlines" aria-hidden="true" />

        <div className="camcorder-topbar" aria-hidden="true">
          <span className="camcorder-rec"><i />{isPlaying ? "REC" : "STBY"}</span>
          <span className="camcorder-time">{formatTime(elapsed)}</span>
          <span className="camcorder-battery"><i /></span>
        </div>

        <div className="camcorder-focus" aria-hidden="true">
          <i className="focus-corner focus-tl" /><i className="focus-corner focus-tr" />
          <i className="focus-corner focus-bl" /><i className="focus-corner focus-br" />
        </div>

        <button
          className="camcorder-control"
          type="button"
          aria-label={isPlaying ? "暂停自我介绍视频" : "播放自我介绍视频"}
          aria-pressed={isPlaying}
          onClick={togglePlayback}
        >
          <span className="control-ring">
            {isPlaying ? <span className="pause-icon" aria-hidden="true"><i /><i /></span> : <span className="play-icon" aria-hidden="true" />}
          </span>
        </button>

        <button
          className="camcorder-volume"
          type="button"
          aria-label={isMuted ? "开启视频声音" : "关闭视频声音"}
          aria-pressed={!isMuted}
          onClick={toggleSound}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9.2v5.6h3.6l4.7 3.7v-13l-4.7 3.7H4Z" />
            {isMuted ? (
              <path d="m16.2 9.2 4.1 4.1m0-4.1-4.1 4.1" />
            ) : (
              <path d="M16.1 8.1a5.4 5.4 0 0 1 0 7.8m2.4-10.2a8.8 8.8 0 0 1 0 12.6" />
            )}
          </svg>
          <span>{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
        </button>

        <div className="camcorder-footer" aria-hidden="true">
          <span>THEO / INTRO FILM</span><span>4K&nbsp;&nbsp;24FPS</span>
        </div>
      </div>

      <div className="camcorder-status" aria-hidden="true"><i /><span>AUTO PLAY<br />ON VIEW</span></div>
      <div className="camcorder-ruler" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
      </div>
    </div>
  );
}
