"use client";

import React from "react";

const NAV_ITEMS = [
  {
    key: "overview",
    label: "Overview",
    icon: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F3ebbb323281c172d6422288190040cb449ec0ca4.svg?generation=1782387731977187&alt=media",
    active: true,
  },
  {
    key: "study-plan",
    label: "Study plan",
    icon: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fef358c8e30707590a765f615f17abe1565c4a7d9.svg?generation=1782387731968758&alt=media",
    active: false,
  },
  {
    key: "my-courses",
    label: "My courses",
    icon: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd19827cdf7e4dc4664be4d01134dc8ff8f4b7ffc.svg?generation=1782387732167092&alt=media",
    active: false,
  },
  {
    key: "test-practice",
    label: "Test Practice",
    icon: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe78c80e9612e06718f34f41c77378a5278ed8e8f.svg?generation=1782387731994946&alt=media",
    active: false,
  },
  {
    key: "learning-profile",
    label: "Learning Profile",
    icon: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fed5a861e3977ac37bc9afd0892e405875a605fcc.svg?generation=1782387732039374&alt=media",
    active: false,
  },
];

const BACK_ICON =
  "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9cfcc71c26f4c4bbe597767a18fdd59dfa8322bb.svg?generation=1782387732152667&alt=media";

export default function AppSidebar() {
  return (
    <nav className="sidebar-nav">
      {/* Navigation Items */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        {NAV_ITEMS.map((item) => (
          <div key={item.key} className={`nav-item${item.active ? " active" : ""}`}>
            <img src={item.icon} alt={item.label} />
            <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <button className="nav-back-btn">
        <img src={BACK_ICON} alt="back" style={{ width: 16, height: 16 }} />
        <span>Trở về trang chủ</span>
      </button>
    </nav>
  );
}
