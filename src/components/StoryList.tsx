"use client";

import React from "react";

/* ── Types ─────────────────────────────────── */

interface Story {
  id: string;
  name: string;
  image: string;
  avatar?: string;
  href: string;
}

/* ── Static data (from outerHTML) ───────────── */

const DEFAULT_AVATAR = "https://ui-avatars.com/api/?background=e1effe&color=0071f9&size=70&name=";

const STORIES: Story[] = [
  {
    id: "6a3891c042202c3bca448638",
    name: "Nguyễn Thị Thư Thái",
    image: "/assets/76557864_279d9e6e.png",
    href: "/story?id=6a3891c042202c3bca448638",
  },
  {
    id: "6a37ec6742202c3bca4485c7",
    name: "Võ Hà My",
    image: "/assets/74498534_c4223820.PNG",
    avatar: "/assets/37512322_08c67ff0.jpg",
    href: "/story?id=6a37ec6742202c3bca4485c7",
  },
  {
    id: "6a37e6de42202c3bca4485bb",
    name: "Nguyễn Ngọc Minh Vy",
    image: "/assets/48801408_b0db1f8d.png",
    href: "/story?id=6a37e6de42202c3bca4485bb",
  },
  {
    id: "6a37e66842202c3bca4485ba",
    name: "Đặng Đức Tâm",
    image: "/assets/13536128_af71833f.jpg",
    href: "/story?id=6a37e66842202c3bca4485ba",
  },
  {
    id: "6a37aae142202c3bca448585",
    name: "Trần Hương Giang",
    image: "/assets/83975440_34800975.jpeg",
    href: "/story?id=6a37aae142202c3bca448585",
  },
  {
    id: "6a37a60942202c3bca448580",
    name: "Nguyễn Ngọc Bảo Trang",
    image: "/assets/28916544_3e20ba87.jpg",
    avatar: "/assets/65388111_aa5a071a.jpg",
    href: "/story?id=6a37a60942202c3bca448580",
  },
  {
    id: "6a36bfe342202c3bca44856e",
    name: "Hán Phương Linh",
    image: "/assets/42523700_c6ec254d.png",
    href: "/story?id=6a36bfe342202c3bca44856e",
  },
  {
    id: "6a36aec842202c3bca448546",
    name: "Nguyễn Hữu Hải",
    image: "/assets/9817596_642aeff7.png",
    href: "/story?id=6a36aec842202c3bca448546",
  },
  {
    id: "6a36a50842202c3bca448539",
    name: "Bảo Ngân",
    image: "/assets/24451553_7a557e16.png",
    href: "/story?id=6a36a50842202c3bca448539",
  },
  {
    id: "6a367ed442202c3bca448515",
    name: "Nguyễn Như Ngọc",
    image: "/assets/91983714_d66b6c98.jpg",
    href: "/story?id=6a367ed442202c3bca448515",
  },
  {
    id: "6a364a8942202c3bca4484c4",
    name: "Nguyễn hữu trường Giang",
    image: "/assets/55143194_de1dc2e5.jpg",
    href: "/story?id=6a364a8942202c3bca4484c4",
  },
  {
    id: "6a350b8942202c3bca448363",
    name: "Quỳnh Hân",
    image: "/assets/84190869_823920e9.png",
    href: "/story?id=6a350b8942202c3bca448363",
  },
  {
    id: "6a34cab242202c3bca4482ec",
    name: "Phạm Xuân Bách",
    image: "/assets/51935025_c892832f.jpeg",
    href: "/story?id=6a34cab242202c3bca4482ec",
  },
  {
    id: "6a3405d342202c3bca44822e",
    name: "Lê Thị Cẩm Ly",
    image: "/assets/45390353_e51afceb.png",
    href: "/story?id=6a3405d342202c3bca44822e",
  },
  {
    id: "6a33ff2e42202c3bca448201",
    name: "Nguyễn Việt Phú",
    image: "/assets/71534143_dbb6683c.PNG",
    href: "/story?id=6a33ff2e42202c3bca448201",
  },
];

/* ── Sub-components ─────────────────────────── */

function CreateStoryCard() {
  return (
    <a href="/story/tao-story" className="story-card story-create" style={{ textDecoration: "none" }}>
      {/* Background gradient */}
      <div className="story-card-bg story-create-bg" />
      {/* Plus button */}
      <div className="story-create-plus">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </div>
      <div className="story-card-name story-create-name">Tạo tin</div>
    </a>
  );
}

function StoryCard({ story }: { story: Story }) {
  const avatarSrc = story.avatar || `${DEFAULT_AVATAR}${encodeURIComponent(story.name.split(" ").slice(-1)[0])}`;
  return (
    <a href={story.href} className="story-card" style={{ textDecoration: "none" }}>
      {/* Background image */}
      <img
        src={story.image}
        alt={story.name}
        className="story-card-bg-img"
        loading="lazy"
      />
      {/* Dark gradient overlay */}
      <div className="story-card-overlay" />
      {/* Avatar */}
      <div className="story-avatar-ring">
        <img
          src={avatarSrc}
          alt={`avatar ${story.name}`}
          className="story-avatar-img"
          loading="lazy"
        />
      </div>
      {/* Name */}
      <div className="story-card-name">{story.name}</div>
    </a>
  );
}

function DiscoveryCard() {
  return (
    <a href="/story" className="story-card story-discovery" style={{ textDecoration: "none" }}>
      <div className="story-discovery-bg" />
      <div className="story-discovery-icon">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </div>
      <div className="story-card-name story-discovery-name">Khám phá thêm</div>
    </a>
  );
}

/* ── Main component ─────────────────────────── */

export default function StoryList() {
  return (
    <section className="story-section">
      <div className="story-scroll-wrapper">
        <div className="story-list">
          <CreateStoryCard />
          {STORIES.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
          <DiscoveryCard />
        </div>
      </div>
    </section>
  );
}
