import React from "react";
import Link from "next/link";

const ICONS = {
  testInProgress:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0ca39006c483793ee7d7e29516dd0cd149a3b4ae.svg?generation=1782387732346232&alt=media",
  testPaper:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F318fe0518c88e1a6bec59ed305c25c72f61cbc29.svg?generation=1782387732345974&alt=media",
  arrowRight:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F2f73c49505a3006f84aabe56e096c5f264be2bdf.svg?generation=1782387732351037&alt=media",
  thumbnail:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F2a376c73587741f40134196ff37087452cc27ddf.png?generation=1782387690671219&alt=media",
};

export default function TestPracticeCard() {
  return (
    <Link href="/practice" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="test-practice-card">
        <div className="test-info">
          <img src={ICONS.thumbnail} alt="test-set-avatar" className="test-thumbnail" />

          <div className="test-details">
            {/* In Progress Badge */}
            <div className="test-in-progress-badge">
              <img src={ICONS.testInProgress} alt="" style={{ width: 18, height: 18 }} />
              <span>Đề đang làm</span>
            </div>

            {/* Test Title */}
            <div className="test-title">[Mar 2026] Real tests Speaking &amp; Writing</div>

            {/* Bottom row */}
            <div className="test-bottom-row">
              <div style={{ display: "flex", alignItems: "flex-start", gap: 6, minWidth: 0 }}>
                <img
                  src={ICONS.testPaper}
                  alt=""
                  style={{ width: 13, height: 13, marginTop: 2, flexShrink: 0 }}
                />
                <div className="test-subtitle">Real tests Speaking Test 1</div>
              </div>

              <div className="test-continue-btn">
                <span>Tiếp tục</span>
                <img src={ICONS.arrowRight} alt="" style={{ width: 16, height: 16 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
