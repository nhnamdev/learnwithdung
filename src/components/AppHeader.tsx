"use client";

import React from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const ICONS = {
  menu: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F1a44982fbf1eaacf09c836f34b9c0eeae7df924f.svg?generation=1782387731977093&alt=media",
  logo: "/logo.png",
  programIcon: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F312127ec3e81c86b48251e31b8f56ec33dccce7e.svg?generation=1782387731968819&alt=media",
  chevronDown: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F1ceef3f6517e9ff843accde2489969cb30b1c560.svg?generation=1782387731971476&alt=media",
  streak: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8ba239a060b337b5175899886f196e5c3a68e05c.svg?generation=1782387731989024&alt=media",
  bell: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F3a3f0536d83aeaf2f911e28cfbebdead85abda0e.svg?generation=1782387731960328&alt=media",
  avatar: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5d5e5c98f63a53979d76e030afd9505c8e63372d.jpg?generation=1782387690181819&alt=media",
};

interface AppHeaderProps {
  onMenuClick: () => void;
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  const screens = useBreakpoint();
  const isMobile = !screens.sm;
  const isTablet = screens.sm && !screens.lg;

  return (
    <header className="app-header">
      {/* Left Section */}
      <div className="header-left">
        {/* Hamburger / Menu Button */}
        <button
          className="menu-trigger-btn"
          onClick={onMenuClick}
          aria-label="Mở menu"
          style={{ flexShrink: 0 }}
        >
          <img src={ICONS.menu} alt="menu" style={{ width: 20, height: 20 }} />
        </button>

        {/* Logo */}
        <div style={{ overflow: "hidden", height: 30, flexShrink: 0 }}>
          <img src={ICONS.logo} alt="logo-prep" className="logo-img" />
        </div>

        {/* Program Badge — ẩn label dài trên mobile */}
        {!isMobile && (
          <div className="program-badge">
            <img src={ICONS.programIcon} alt="program" style={{ width: 16, height: 16 }} />
            {!isTablet && (
              <span className="program-badge-text">Chương trình bạn chọn:</span>
            )}
            <span className="program-badge-value">TOEIC</span>
            <img src={ICONS.chevronDown} alt="chevron" style={{ width: 16, height: 16 }} />
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="header-right">
        {/* Streak Badge — chỉ icon trên mobile */}
        <div className="streak-badge">
          <img src={ICONS.streak} alt="streak" style={{ width: 20, height: 24 }} />
          {!isMobile && <span className="streak-text">Khám phá streak</span>}
        </div>

        {/* Notification Bell */}
        <button className="notification-btn" aria-label="Thông báo">
          <img src={ICONS.bell} alt="bell" style={{ width: 16, height: 16 }} />
          <span className="notif-badge">0</span>
        </button>

        {/* Avatar */}
        <div className="avatar-btn">
          <img src={ICONS.avatar} alt="avatar Huỳnh Tấn Toàn" />
        </div>
      </div>
    </header>
  );
}
