"use client";

import React from "react";

const AVATAR =
  "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ffb250dbf83b979e24f4f84313dd010dfe239d333.jpg?generation=1782387690329143&alt=media";

export default function GreetingSection() {
  return (
    <div className="greeting-section">
      <img
        src={AVATAR}
        alt="avatar"
        className="greeting-avatar"
      />
      <div>
        <p className="greeting-name">Xin chào, Huỳnh Tấn Toàn</p>
        <p className="greeting-sub">Cùng Prep tiến bộ mỗi ngày nào!</p>
      </div>
    </div>
  );
}
