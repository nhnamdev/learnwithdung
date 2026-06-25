"use client";

import React from "react";

const ICONS = {
  lessonBadgeBg:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ffa884ee92db134183260b590ad6061014cc17932.svg?generation=1782387732160987&alt=media",
  clock:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F104e133ef77f1d166a92c02d16925a2fe0d34db8.svg?generation=1782387732188866&alt=media",
  bookmark1:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe95b1f81a0aea33c65a6c24eb880618782c705c7.svg?generation=1782387732177306&alt=media",
  bookmark2:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F55dac0cacdf0206ea8378baeccb76b977c06e94e.svg?generation=1782387732212076&alt=media",
  bookmark3:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb2379debc5377b824eaf20e9b403ac3957746999.svg?generation=1782387732281143&alt=media",
};

export default function RecentLessonCard() {
  return (
    <div className="lesson-card">
      <div style={{ display: "flex", alignItems: "flex-start", position: "relative", gap: 20 }}>
        {/* Lesson Number Badge */}
        <div className="lesson-number-badge">
          <div className="lesson-number-badge-inner">
            <div style={{ position: "relative" }}>
              <img src={ICONS.lessonBadgeBg} alt="" style={{ width: 52, height: 60, display: "block" }} />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 0,
                  right: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="lesson-number-text">06</div>
                <div className="lesson-label">LESSON</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Info */}
        <div style={{ flex: 1, minWidth: 0, marginTop: -6 }}>
          <h5 className="lesson-title">
            [Listening] Part 3 - Làm quen với dạng câu hỏi hội thoại
          </h5>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {/* Progress */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#6b7280" }}>
              <span>0/ Section</span>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <img src={ICONS.clock} alt="clock" style={{ width: 20, height: 20 }} />
                <span>0/6</span>
              </div>
            </div>

            {/* Continue */}
            <div className="lesson-continue-btn">
              <span>Tiếp tục học</span>
              <span style={{ fontSize: 14 }}>›</span>
            </div>
          </div>
        </div>

        {/* Bookmark Icons */}
        <div style={{ position: "absolute", top: 1, right: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[ICONS.bookmark1, ICONS.bookmark2, ICONS.bookmark3].map((icon, i) => (
              <img key={i} src={icon} alt="" style={{ width: 20, height: 20 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
