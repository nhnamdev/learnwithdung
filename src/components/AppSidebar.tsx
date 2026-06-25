"use client";

import React from "react";
import {
  HomeOutlined,
  ReadOutlined,
  FileTextOutlined,
  BankOutlined,
  ThunderboltOutlined,
  UserOutlined,
  RocketOutlined,
} from "@ant-design/icons";

interface NavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    key: "home",
    label: "Trang chủ",
    icon: <HomeOutlined />,
    active: true,
  },
  {
    key: "my-courses",
    label: "Khóa học của tôi",
    icon: <ReadOutlined />,
  },
  {
    key: "practice",
    label: "Luyện đề",
    icon: <FileTextOutlined />,
  },
  {
    key: "school-exams",
    label: "Đề Trường - Sở",
    icon: <BankOutlined />,
  },
  {
    key: "flashcard",
    label: "Flash Card",
    icon: <ThunderboltOutlined />,
  },
  {
    key: "profile",
    label: "Hồ sơ cá nhân",
    icon: <UserOutlined />,
  },
];

export default function AppSidebar() {
  return (
    <nav className="sidebar-nav">
      {/* Navigation Items */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        {NAV_ITEMS.map((item) => (
          <div key={item.key} className={`nav-item${item.active ? " active" : ""}`}>
            <span className="nav-item-icon">{item.icon}</span>
            <span className="nav-item-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* CTA Button — Thi thử Ngay */}
      <a href="#" className="sidebar-cta-btn">
        <RocketOutlined style={{ fontSize: 16 }} />
        <span>Thi thử Ngay</span>
      </a>
    </nav>
  );
}
