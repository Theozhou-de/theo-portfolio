"use client";

import { useEffect, useRef, useState } from "react";

type WorkItem = {
  title: string;
  category: string;
  duration?: string;
  image: string;
  video?: string;
};

type PortfolioWheelProps = {
  kind: "video" | "image";
};

const videoWorks: WorkItem[] = [
  { title: "NEW ERA 1", category: "AIGC / FASHION CAMPAIGN", duration: "00:21", image: "/works/video/yankees-01-poster.jpg", video: "/works/video/yankees-01.mp4" },
  { title: "NEW ERA 2", category: "AIGC / PRODUCT CAMPAIGN", duration: "00:16", image: "/works/video/yankees-02-poster.jpg", video: "/works/video/yankees-02.mp4" },
  { title: "NEW ERA 3", category: "AIGC / LOOKBOOK FILM", duration: "00:15", image: "/works/video/yankees-03-poster.jpg", video: "/works/video/yankees-03.mp4" },
  { title: "NEW ERA 4", category: "AIGC / BRAND FILM", duration: "00:15", image: "/works/video/yankees-04-poster.jpg", video: "/works/video/yankees-04.mp4" },
  { title: "绒呼吸", category: "AIGC / PRODUCT FILM", duration: "00:38", image: "/works/video/fur-breath-poster.jpg", video: "/works/video/fur-breath.mp4" },
  { title: "CK", category: "AIGC / FASHION CAMPAIGN", duration: "00:12", image: "/works/video/ck-poster.jpg", video: "/works/video/ck.mp4" },
  { title: "JACKWOLF", category: "AIGC / OUTDOOR CAMPAIGN", duration: "00:24", image: "/works/video/jackwolf-poster.jpg", video: "/works/video/jackwolf.mp4" },
  { title: "K2", category: "AIGC / BEAUTY FILM", duration: "00:10", image: "/works/video/k2-poster.jpg", video: "/works/video/k2.mp4" },
  { title: "K6", category: "AIGC / BEAUTY FILM", duration: "00:11", image: "/works/video/k6-poster.jpg", video: "/works/video/k6.mp4" },
  { title: "KERASTASE", category: "AIGC / BEAUTY CAMPAIGN", duration: "00:13", image: "/works/video/kerastase-poster.jpg", video: "/works/video/kerastase.mp4" },
];

const imageWorks: WorkItem[] = [
  { title: "WEIGHTLESS SHELL", category: "COLUMBIA / PRODUCT CONCEPT", image: "/works/image/portfolio-01.webp" },
  { title: "ALPINE PORTRAIT", category: "OUTDOOR / FASHION CAMPAIGN", image: "/works/image/portfolio-02.webp" },
  { title: "CHOCOLATE BOTANICA I", category: "FOOD / PRODUCT VISUAL", image: "/works/image/portfolio-03.webp" },
  { title: "CHOCOLATE BOTANICA II", category: "FOOD / PRODUCT VISUAL", image: "/works/image/portfolio-04.webp" },
  { title: "SUMMER EDITORIAL", category: "MODEL / LIFESTYLE", image: "/works/image/portfolio-05.webp" },
  { title: "EMBROIDERY ERA I", category: "NEW ERA / PRODUCT CAMPAIGN", image: "/works/image/portfolio-06.webp" },
  { title: "STORMSHELL BLACK", category: "COLUMBIA / PRODUCT VISUAL", image: "/works/image/portfolio-07.webp" },
  { title: "STORMSHELL SAND", category: "COLUMBIA / PRODUCT VISUAL", image: "/works/image/portfolio-08.webp" },
  { title: "STORMSHELL BLUE", category: "COLUMBIA / PRODUCT VISUAL", image: "/works/image/portfolio-09.webp" },
  { title: "CITY FRAME", category: "NEW ERA / FASHION CAMPAIGN", image: "/works/image/portfolio-10.webp" },
  { title: "EMBROIDERY ERA II", category: "NEW ERA / PRODUCT CAMPAIGN", image: "/works/image/portfolio-11.webp" },
  { title: "URBAN DENIM", category: "MODEL / STREET EDITORIAL", image: "/works/image/portfolio-12.webp" },
  { title: "CK ESSENTIALS I", category: "CALVIN KLEIN / LIFESTYLE", image: "/works/image/portfolio-13.webp" },
  { title: "TECHLITE SPLASH", category: "COLUMBIA / PRODUCT CAMPAIGN", image: "/works/image/portfolio-14.webp" },
  { title: "MEADOW HIKE", category: "COLUMBIA / PRODUCT CAMPAIGN", image: "/works/image/portfolio-15.webp" },
  { title: "CK ESSENTIALS II", category: "CALVIN KLEIN / LIFESTYLE", image: "/works/image/portfolio-16.webp" },
  { title: "COURT LIGHT", category: "NEW ERA / FASHION CAMPAIGN", image: "/works/image/portfolio-17.webp" },
  { title: "TRAIL BLACK I", category: "COLUMBIA / PRODUCT CAMPAIGN", image: "/works/image/portfolio-18.webp" },
  { title: "TRAIL BLACK II", category: "COLUMBIA / PRODUCT CAMPAIGN", image: "/works/image/portfolio-19.webp" },
  { title: "TRAIL MOTION", category: "COLUMBIA / OUTDOOR CAMPAIGN", image: "/works/image/portfolio-20.webp" },
  { title: "HOLIDAY KNIT", category: "MODEL / FASHION EDITORIAL", image: "/works/image/portfolio-21.webp" },
  { title: "TRAIL PANTS", category: "COLUMBIA / OUTDOOR CAMPAIGN", image: "/works/image/portfolio-22.webp" },
];

function circularOffset(index: number, active: number, length: number) {
  let offset = index - active;
  const half = Math.floor(length / 2);
  if (offset > half) offset -= length;
  if (offset < -half) offset += length;
  return offset;
}

function offsetClass(offset: number) {
  if (offset === 0) return "is-center";
  if (Math.abs(offset) > 3) return "is-hidden";
  return `is-${offset < 0 ? "left" : "right"}-${Math.abs(offset)}`;
}

export default function PortfolioWheel({ kind }: PortfolioWheelProps) {
  const items = kind === "video" ? videoWorks : imageWorks;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef(0);
  const wheelLockRef = useRef(0);
  const touchStartRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(kind === "video");
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (event: WheelEvent) => {
      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (Math.abs(delta) < 8) return;

      const direction = delta > 0 ? 1 : -1;
      const current = activeRef.current;
      const atBoundary = (direction < 0 && current === 0) || (direction > 0 && current === items.length - 1);
      if (atBoundary) return;

      event.preventDefault();
      const now = performance.now();
      if (now < wheelLockRef.current) return;
      wheelLockRef.current = now + 420;
      setActive((value) => Math.min(items.length - 1, Math.max(0, value + direction)));
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [items.length]);

  useEffect(() => {
    if (kind !== "video" || !videoRef.current) return;
    videoRef.current.currentTime = 0;
    if (isPlaying) void videoRef.current.play().catch(() => setIsPlaying(false));
  }, [active, isPlaying, kind]);

  const move = (direction: number) => {
    setActive((value) => Math.min(items.length - 1, Math.max(0, value + direction)));
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartRef.current === null) return;
    const distance = clientX - touchStartRef.current;
    if (Math.abs(distance) > 44) move(distance < 0 ? 1 : -1);
    touchStartRef.current = null;
  };

  const activeItem = items[active];
  const sectionNumber = kind === "video" ? "04" : "05";
  const title = kind === "video" ? "VIDEO WORKS" : "IMAGE WORKS";

  return (
    <section
      className={`portfolio-wheel portfolio-wheel-${kind}`}
      id={`${kind}-works`}
      ref={sectionRef}
      tabIndex={0}
      aria-label={`${title} horizontal carousel`}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") move(1);
        if (event.key === "ArrowLeft") move(-1);
      }}
      onTouchStart={(event) => { touchStartRef.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
    >
      <div className="portfolio-wheel-grid" aria-hidden="true" />
      <div className="portfolio-wheel-head shell">
        <p><span>{sectionNumber}</span> / SELECTED COMMERCIAL WORK</p>
        <h2>{title}</h2>
      </div>

      <div className="portfolio-carousel" aria-live="polite">
        {items.map((item, index) => {
          const offset = circularOffset(index, active, items.length);
          const isActive = offset === 0;
          return (
            <article
              className={`portfolio-card ${offsetClass(offset)}`}
              key={`${kind}-${item.title}`}
              aria-hidden={!isActive}
            >
              {kind === "video" && isActive ? (
                <video
                  ref={videoRef}
                  src={item.video}
                  poster={item.image}
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              ) : (
                <img src={item.image} alt="" width="720" height="1080" loading="lazy" decoding="async" />
              )}
              <span className="portfolio-card-shade" aria-hidden="true" />
              <span className="portfolio-card-number">{String(index + 1).padStart(2, "0")}</span>
              {kind === "video" && (
                <button
                  className="portfolio-play"
                  type="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={isPlaying && isActive ? "Pause selected video" : "Play selected video"}
                  onClick={() => {
                    if (!isActive) { setActive(index); return; }
                    const video = videoRef.current;
                    if (!video) return;
                    if (video.paused) void video.play(); else video.pause();
                  }}
                >
                  <span className={isPlaying && isActive ? "portfolio-pause-icon" : "portfolio-play-icon"} aria-hidden="true" />
                </button>
              )}
              {item.duration && <span className="portfolio-duration">{item.duration}</span>}
              {!isActive && (
                <button className="portfolio-card-select" type="button" onClick={() => setActive(index)} tabIndex={-1} aria-label={`Select ${item.title}`} />
              )}
            </article>
          );
        })}
      </div>

      <div className="portfolio-active-meta">
        <h3>{activeItem.title}</h3>
        <p>{activeItem.category}</p>
        {kind === "video" ? (
          <button
            className="portfolio-sound"
            type="button"
            aria-label={isMuted ? "Turn selected video sound on" : "Mute selected video"}
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;
              video.muted = !video.muted;
              setIsMuted(video.muted);
            }}
          >
            {isMuted ? "PLAY WITH SOUND" : "SOUND ON"}
          </button>
        ) : (
          <button className="portfolio-project-link" type="button">VIEW FULL PROJECT <span aria-hidden="true">↗</span></button>
        )}
      </div>

      <div className="portfolio-navigation shell">
        <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous work">←</button>
        <span className="portfolio-count">{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => move(1)} disabled={active === items.length - 1} aria-label="Next work">→</button>
        <div className="portfolio-progress" aria-hidden="true"><i style={{ width: `${((active + 1) / items.length) * 100}%` }} /></div>
        <div className="portfolio-wheel-hint" aria-hidden="true">
          <span className="portfolio-mouse"><i /></span>
          <b>SCROLL WHEEL TO {kind === "video" ? "NAVIGATE" : "EXPLORE"}</b>
        </div>
      </div>
    </section>
  );
}
