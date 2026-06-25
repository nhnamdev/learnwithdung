"use client";

import React from "react";
import {
  PlayCircleOutlined,
  RollbackOutlined,
  FastForwardOutlined,
  SoundOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";

const PLAY_ICON = "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5f41ca666790ad7191b8b1bf08446011078de55f.svg?generation=1782402653175793&alt=media";

interface VideoPlayerProps {
  title: string;
  remainingViews: number;
  totalViews: number;
  duration: string;
  quizPoints: { label: string; percent: number }[];
}

export default function VideoPlayer({
  title,
  remainingViews,
  totalViews,
  duration,
  quizPoints,
}: VideoPlayerProps) {
  return (
    <div className="lp-card">
      {/* Title */}
      <h2 className="lp-video-title">
        <span>{title}</span>
        <span className="lp-star-icon">⭐</span>
      </h2>

      {/* Views counter */}
      <div className="lp-views-row">
        <span className="lp-views-icon">👁️</span>
        <span className="lp-views-text">
          Còn: <span className="lp-views-count">{remainingViews}&nbsp;/{totalViews}</span> lượt xem
        </span>
      </div>

      {/* Video area */}
      <div className="lp-video-wrap">
        {/* Play button overlay */}
        <div className="lp-video-overlay">
          <div className="lp-play-btn">
            <img src={PLAY_ICON} alt="Play" style={{ width: 80, height: 80 }} />
          </div>
          {/* Wave gradient at bottom */}
          <div className="lp-video-wave" />
        </div>

        {/* Thumbnail / video */}
        <div className="lp-video-inner">
          <div className="lp-video-bg" />
        </div>

        {/* Progress bar */}
        <div className="lp-progress-wrap">
          <div className="lp-progress-track">
            <div className="lp-progress-fill" style={{ width: "0%" }} />
            <div className="lp-progress-bg" />
            {quizPoints.map((q) => (
              <div
                key={q.label}
                className="lp-quiz-dot"
                style={{ left: `${q.percent}%` }}
                aria-label={q.label}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="lp-controls">
          <div className="lp-controls-left">
            <button className="lp-ctrl-btn" aria-label="Phát">
              <PlayCircleOutlined style={{ fontSize: 22, color: "white" }} />
            </button>
            <button className="lp-ctrl-btn" aria-label="Tua lại 10s">
              <RollbackOutlined style={{ fontSize: 22, color: "white" }} />
            </button>
            <button className="lp-ctrl-btn" aria-label="Tua tiếp 10s">
              <FastForwardOutlined style={{ fontSize: 22, color: "white" }} />
            </button>
            <button className="lp-ctrl-btn" aria-label="Tắt tiếng">
              <SoundOutlined style={{ fontSize: 22, color: "white" }} />
            </button>
            <span className="lp-time">00:00 / {duration}</span>
          </div>
          <div className="lp-controls-right">
            <span className="lp-speed">1 x</span>
            <button className="lp-ctrl-btn" aria-label="Toàn màn hình">
              <FullscreenOutlined style={{ fontSize: 22, color: "white" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Quiz marker row */}
      <div className="lp-quiz-row">
        {quizPoints.map((q) => (
          <div key={q.label} className="lp-quiz-icon" aria-label={q.label}>
            🔴
          </div>
        ))}
      </div>
    </div>
  );
}
