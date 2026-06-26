"use client";

import React, { useState } from "react";
import { Layout, Grid, Drawer } from "antd";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import styles from "@/components/profile/profile.module.css";

const { Content } = Layout;
const { useBreakpoint } = Grid;

// Custom Circular Progress SVG Component
interface CircularProgressProps {
  percent: number;
  color: string;
  size?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percent, color, size = 42 }) => {
  const radius = size * 0.38;
  const strokeWidth = size * 0.08;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="rgba(163, 172, 194, 0.12)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.35s ease" }}
      />
      <text
        x="50%"
        y="50%"
        fill="#1c2a4c"
        fontSize={size * 0.22}
        fontWeight="800"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ transform: `rotate(90deg) translate(0px, 0.5px)`, transformOrigin: "center" }}
      >
        {percent}%
      </text>
    </svg>
  );
};

// SVG Line Charts
const WeekChart: React.FC = () => (
  <svg width="100%" height="240" viewBox="0 0 800 240" preserveAspectRatio="none" style={{ overflow: "visible" }}>
    {/* Grid lines */}
    <line x1="50" y1="30" x2="750" y2="30" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="70" x2="750" y2="70" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="110" x2="750" y2="110" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="150" x2="750" y2="150" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="190" x2="750" y2="190" stroke="#e5e7eb" strokeWidth="1.5" />

    {/* Y Axis labels */}
    <text x="35" y="34" fill="#a3acc2" fontSize="11" textAnchor="end">100%</text>
    <text x="35" y="74" fill="#a3acc2" fontSize="11" textAnchor="end">80%</text>
    <text x="35" y="114" fill="#a3acc2" fontSize="11" textAnchor="end">60%</text>
    <text x="35" y="154" fill="#a3acc2" fontSize="11" textAnchor="end">40%</text>
    <text x="35" y="194" fill="#a3acc2" fontSize="11" textAnchor="end">20%</text>

    {/* X Axis labels */}
    <text x="70" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">T2</text>
    <text x="180" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">T3</text>
    <text x="290" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">T4</text>
    <text x="400" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">T5</text>
    <text x="510" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">T6</text>
    <text x="620" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">T7</text>
    <text x="730" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">CN</text>

    {/* Curves */}
    {/* Flashcard (Green) */}
    <path
      d="M 70 150 L 180 160 L 290 120 L 400 90 L 510 70 L 620 50 L 730 40"
      fill="none"
      stroke="rgb(34, 197, 94)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lý thuyết (Orange) */}
    <path
      d="M 70 190 L 180 180 L 290 170 L 400 150 L 510 120 L 620 100 L 730 80"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bài tập (Blue) */}
    <path
      d="M 70 110 L 180 100 L 290 90 L 400 80 L 510 60 L 620 50 L 730 50"
      fill="none"
      stroke="rgb(59, 130, 246)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Kiểm tra (Purple) */}
    <path
      d="M 70 170 L 180 150 L 290 160 L 400 130 L 510 110 L 620 90 L 730 76"
      fill="none"
      stroke="rgb(139, 92, 246)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Data point circles for CN */}
    <circle cx="730" cy="40" r="5" fill="rgb(34, 197, 94)" stroke="#fff" strokeWidth="2" />
    <circle cx="730" cy="80" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
    <circle cx="730" cy="50" r="5" fill="rgb(59, 130, 246)" stroke="#fff" strokeWidth="2" />
    <circle cx="730" cy="76" r="5" fill="rgb(139, 92, 246)" stroke="#fff" strokeWidth="2" />
  </svg>
);

const MonthChart: React.FC = () => (
  <svg width="100%" height="240" viewBox="0 0 800 240" preserveAspectRatio="none" style={{ overflow: "visible" }}>
    {/* Grid lines */}
    <line x1="50" y1="30" x2="750" y2="30" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="70" x2="750" y2="70" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="110" x2="750" y2="110" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="150" x2="750" y2="150" stroke="#f3f4f6" strokeWidth="1" />
    <line x1="50" y1="190" x2="750" y2="190" stroke="#e5e7eb" strokeWidth="1.5" />

    {/* Y Axis labels */}
    <text x="35" y="34" fill="#a3acc2" fontSize="11" textAnchor="end">100%</text>
    <text x="35" y="74" fill="#a3acc2" fontSize="11" textAnchor="end">80%</text>
    <text x="35" y="114" fill="#a3acc2" fontSize="11" textAnchor="end">60%</text>
    <text x="35" y="154" fill="#a3acc2" fontSize="11" textAnchor="end">40%</text>
    <text x="35" y="194" fill="#a3acc2" fontSize="11" textAnchor="end">20%</text>

    {/* X Axis labels */}
    <text x="137.5" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">Tuần 1</text>
    <text x="312.5" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">Tuần 2</text>
    <text x="487.5" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">Tuần 3</text>
    <text x="662.5" y="215" fill="#a3acc2" fontSize="11" textAnchor="middle">Tuần 4</text>

    {/* Curves */}
    {/* Flashcard (Green) */}
    <path
      d="M 137.5 150 L 312.5 120 L 487.5 80 L 662.5 50"
      fill="none"
      stroke="rgb(34, 197, 94)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lý thuyết (Orange) */}
    <path
      d="M 137.5 180 L 312.5 160 L 487.5 110 L 662.5 82"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bài tập (Blue) */}
    <path
      d="M 137.5 120 L 312.5 100 L 487.5 70 L 662.5 46"
      fill="none"
      stroke="rgb(59, 130, 246)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Kiểm tra (Purple) */}
    <path
      d="M 137.5 160 L 312.5 140 L 487.5 90 L 662.5 70"
      fill="none"
      stroke="rgb(139, 92, 246)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Data points for Week 4 */}
    <circle cx="662.5" cy="50" r="5" fill="rgb(34, 197, 94)" stroke="#fff" strokeWidth="2" />
    <circle cx="662.5" cy="82" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
    <circle cx="662.5" cy="46" r="5" fill="rgb(59, 130, 246)" stroke="#fff" strokeWidth="2" />
    <circle cx="662.5" cy="70" r="5" fill="rgb(139, 92, 246)" stroke="#fff" strokeWidth="2" />
  </svg>
);

export default function ProfilePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const screens = useBreakpoint();
  const isDesktop = !!screens.lg;

  // State selectors
  const [timeframe, setTimeframe] = useState<"week" | "month" | "all">("week");
  const [progressView, setProgressView] = useState<"week" | "month">("week");
  const [historyTab, setHistoryTab] = useState<"quiz" | "flashcard" | "test">("quiz");

  const handleMenuClick = () => {
    if (isDesktop) {
      setSidebarPinned((prev) => !prev);
    } else {
      setDrawerOpen(true);
    }
  };

  // Stats data mapping based on selected timeframe
  const getStats = (tf: "week" | "month" | "all") => {
    switch (tf) {
      case "month":
        return {
          timeframeLabel: "Tháng này",

          // Flashcard
          flashcardVal: "240",
          flashcardTotal: "300",
          flashcardPercent: 80,
          flashcardAccuracy: 88,
          flashcardNew: "+ 110 từ mới",

          // Lý thuyết
          theoryVal: "18",
          theoryTotal: "24",
          theoryPercent: 75,
          theoryAccuracy: 82,
          theoryNew: "+ 12 video mới",

          // Bài tập
          hwVal: "38",
          hwTotal: "45",
          hwPercent: 84,
          hwAccuracy: 92,
          hwAvgScore: "8.7 điểm TB",

          // Kiểm tra
          testVal: "8.5",
          testMax: "10",
          testAttempts: "12 lần thi",
          testPercent: 85,

          // Giữ chuỗi
          streakVal: "22",
          streakMax: "22",
          streakProgress: "22/30 ngày tháng này",
          streakPercent: 73,
        };
      case "all":
        return {
          timeframeLabel: "Tổng",

          // Flashcard
          flashcardVal: "850",
          flashcardTotal: "1000",
          flashcardPercent: 85,
          flashcardAccuracy: 90,
          flashcardNew: "+ 850 từ thuộc",

          // Lý thuyết
          theoryVal: "94",
          theoryTotal: "120",
          theoryPercent: 78,
          theoryAccuracy: 85,
          theoryNew: "+ 94 video",

          // Bài tập
          hwVal: "182",
          hwTotal: "200",
          hwPercent: 91,
          hwAccuracy: 94,
          hwAvgScore: "8.9 điểm TB",

          // Kiểm tra
          testVal: "8.8",
          testMax: "10",
          testAttempts: "45 lần thi",
          testPercent: 88,

          // Giữ chuỗi
          streakVal: "58",
          streakMax: "58",
          streakProgress: "58/94 ngày học",
          streakPercent: 62,
        };
      case "week":
      default:
        return {
          timeframeLabel: "Tuần này",

          // Flashcard
          flashcardVal: "120",
          flashcardTotal: "300",
          flashcardPercent: 40,
          flashcardAccuracy: 85,
          flashcardNew: "+ 25 từ mới",

          // Lý thuyết
          theoryVal: "6",
          theoryTotal: "24",
          theoryPercent: 25,
          theoryAccuracy: 75,
          theoryNew: "+ 3 video mới",

          // Bài tập
          hwVal: "12",
          hwTotal: "15",
          hwPercent: 80,
          hwAccuracy: 90,
          hwAvgScore: "8.5 điểm TB",

          // Kiểm tra
          testVal: "8.2",
          testMax: "10",
          testAttempts: "3 lần thi",
          testPercent: 82,

          // Giữ chuỗi
          streakVal: "5",
          streakMax: "15",
          streakProgress: "5/6 ngày tuần này",
          streakPercent: 83,
        };
    }
  };

  const stats = getStats(timeframe);

  // Heatmap generation
  const heatmapCells = [
    0, 1, 3, 2, 0, 4, 1, // Tuần 1
    2, 0, 1, 3, 4, 0, 2, // Tuần 2
    0, 2, 4, 1, 3, 0, 1, // Tuần 3
    3, 1, 0, 2, 4, 3, 0, // Tuần 4
    1, 4, 2, 0, 1, 3, 2, // Tuần 5
    0, 2, 3, 4, 1, 0, 3, // Tuần 6
    2, 1, 0, 3, 4, 2, 0, // Tuần 7
    0, 3, 4, 1, 2, 0, 1, // Tuần 8
    2, 0, 1, 3, 4, 2, 0, // Tuần 9
    1, 2, 0, 4, 3, 1, 2, // Tuần 10
    0, 3, 4, 1, 2, 0, 3, // Tuần 11
    1, 2, 0, 3, 4, 1, 2, // Tuần 12
    0, 1, 3, 2, 0, 4, 2, // Tuần 13
    1, 2, 0, 3, 4, 0, 0, // Tuần 14
  ];

  const totalTrackedDays = 94;
  const activeDaysCount = heatmapCells.filter(level => level > 0).slice(0, totalTrackedDays).length;
  const activePercentage = Math.round((activeDaysCount / totalTrackedDays) * 100);

  return (
    <Layout className="app-layout">
      {/* ── Sticky header ── */}
      <AppHeader onMenuClick={handleMenuClick} />

      {/* Hover trigger strip — desktop only */}
      {isDesktop && <div className="sider-hover-trigger" />}

      {/* Desktop Sidebar */}
      {isDesktop && (
        <div
          className={`app-sider${sidebarPinned ? " sider-pinned" : ""}`}
          style={{ width: 240 }}
        >
          <AppSidebar activeKey="profile" />
        </div>
      )}

      {/* Mobile/Tablet Drawer Sidebar */}
      <Drawer
        placement="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        size="default"
        styles={{ body: { padding: 0 } }}
        style={{ top: 64 }}
        title={null}
        closable={false}
      >
        <AppSidebar activeKey="profile" />
      </Drawer>

      {/* ── Main Content ── */}
      <Content className="app-content">
        <div className="main-scroll">
          <div className={styles.profileContainer}>

            {/* Header section with title and timeframe toggles */}
            <div className={styles.sectionHeader} style={{ padding: "0 40px" }}>
              <div className={styles.headerTitleWrapper}>
                <h1 className={styles.headerTitle}>
                  <span className={styles.headerIcon}>
                    <img
                      src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F824224ad4e901f82afd54697b35bda2f87f77fe5.svg?generation=1782490146257559&alt=media"
                      alt="Portfolio Icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </span>
                  Hồ sơ học tập
                </h1>
                <p className={styles.headerSubtitle}>{stats.timeframeLabel}</p>
              </div>
              <div className={styles.toggleWrapper}>
                <button
                  onClick={() => setTimeframe("week")}
                  className={`${styles.toggleBtn} ${timeframe === "week" ? styles.toggleBtnActive : ""}`}
                >
                  Tuần này
                </button>
                <button
                  onClick={() => setTimeframe("month")}
                  className={`${styles.toggleBtn} ${timeframe === "month" ? styles.toggleBtnActive : ""}`}
                >
                  Tháng này
                </button>
                <button
                  onClick={() => setTimeframe("all")}
                  className={`${styles.toggleBtn} ${timeframe === "all" ? styles.toggleBtnActive : ""}`}
                >
                  Tổng
                </button>
              </div>
            </div>

            {/* Main dashboard content */}
            <div style={{ padding: "0 40px" }}>

              {/* Stats Cards Grid (5 metrics) */}
              <div className={styles.statsGrid}>

                {/* 1. Flashcard Card */}
                <div
                  className={styles.statCard}
                  style={{
                    backgroundImage: "linear-gradient(to right bottom, rgb(255, 255, 255), rgba(236, 253, 245, 0.5))",
                    borderColor: "rgba(167, 243, 208, 0.6)"
                  }}
                >
                  <div className={styles.cardBgCircle} style={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap} style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", outline: "1px solid rgba(16, 185, 129, 0.2)" }}>
                        <img
                          className={styles.cardIcon}
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fa82e906a88512982e235ea24f08d1371e5c66278.svg?generation=1782490146256461&alt=media"
                          alt="Flashcard"
                        />
                      </div>
                      <span className={styles.cardTitle}>Flashcard</span>
                    </div>
                    <div className={styles.cardValueRow}>
                      <span className={styles.cardValue} style={{ color: "rgb(16, 185, 129)" }}>
                        {stats.flashcardVal}
                        <span style={{ fontSize: 16, fontWeight: "normal", color: "#a3acc2", marginLeft: 4 }}>/{stats.flashcardTotal}</span>
                      </span>
                    </div>
                    <p className={styles.cardLabel} style={{ marginTop: 4, minHeight: 20 }}>từ đã thuộc</p>
                    <div className={styles.cardSubBlock} style={{ marginTop: 12 }}>
                      <CircularProgress percent={stats.flashcardPercent} color="rgb(16, 185, 129)" />
                      <div className={styles.miniChartText}>
                        <p><span style={{ fontWeight: "bold", color: "rgb(5, 150, 105)" }}>{stats.flashcardAccuracy}%</span> chính xác</p>
                        <p style={{ marginTop: 2, fontSize: 11 }}>{stats.flashcardNew}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Lý thuyết Card */}
                <div
                  className={styles.statCard}
                  style={{
                    backgroundImage: "linear-gradient(to right bottom, rgb(255, 255, 255), rgba(255, 251, 235, 0.5))",
                    borderColor: "rgba(245, 158, 11, 0.3)"
                  }}
                >
                  <div className={styles.cardBgCircle} style={{ backgroundColor: "rgba(245, 158, 11, 0.05)" }} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap} style={{ backgroundColor: "rgba(245, 158, 11, 0.1)", outline: "1px solid rgba(245, 158, 11, 0.2)", color: "#f59e0b" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: "block" }}>
                          <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                        </svg>
                      </div>
                      <span className={styles.cardTitle}>Lý thuyết</span>
                    </div>
                    <div className={styles.cardValueRow}>
                      <span className={styles.cardValue} style={{ color: "#f59e0b" }}>
                        {stats.theoryVal}
                        <span style={{ fontSize: 16, fontWeight: "normal", color: "#a3acc2", marginLeft: 4 }}>/{stats.theoryTotal}</span>
                      </span>
                    </div>
                    <p className={styles.cardLabel} style={{ marginTop: 4, minHeight: 20 }}>video đã xem</p>
                    <div className={styles.cardSubBlock} style={{ marginTop: 12 }}>
                      <CircularProgress percent={stats.theoryPercent} color="#f59e0b" />
                      <div className={styles.miniChartText}>
                        <p><span style={{ fontWeight: "bold", color: "#d97706" }}>{stats.theoryAccuracy}%</span> hoàn thành</p>
                        <p style={{ marginTop: 2, fontSize: 11 }}>{stats.theoryNew}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Bài tập Card */}
                <div
                  className={styles.statCard}
                  style={{
                    backgroundImage: "linear-gradient(to right bottom, rgb(255, 255, 255), rgba(138, 180, 248, 0.1))",
                    borderColor: "rgba(138, 180, 248, 0.4)"
                  }}
                >
                  <div className={styles.cardBgCircle} style={{ backgroundColor: "rgba(66, 133, 244, 0.05)" }} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap} style={{ backgroundColor: "rgba(66, 133, 244, 0.1)", outline: "1px solid rgba(66, 133, 244, 0.2)", color: "rgb(66, 133, 244)" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: "block" }}>
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      </div>
                      <span className={styles.cardTitle}>Bài tập</span>
                    </div>
                    <div className={styles.cardValueRow}>
                      <span className={styles.cardValue} style={{ color: "rgb(66, 133, 244)" }}>
                        {stats.hwVal}
                        <span style={{ fontSize: 16, fontWeight: "normal", color: "#a3acc2", marginLeft: 4 }}>/{stats.hwTotal}</span>
                      </span>
                    </div>
                    <p className={styles.cardLabel} style={{ marginTop: 4, minHeight: 20 }}>bài tập đã làm</p>
                    <div className={styles.cardSubBlock} style={{ marginTop: 12 }}>
                      <CircularProgress percent={stats.hwPercent} color="rgb(66, 133, 244)" />
                      <div className={styles.miniChartText}>
                        <p><span style={{ fontWeight: "bold", color: "rgb(26, 86, 219)" }}>{stats.hwAccuracy}%</span> đúng hạn</p>
                        <p style={{ marginTop: 2, fontSize: 11 }}>{stats.hwAvgScore}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Kiểm tra Card */}
                <div
                  className={styles.statCard}
                  style={{
                    backgroundImage: "linear-gradient(to right bottom, rgb(255, 255, 255), rgba(245, 243, 255, 0.5))",
                    borderColor: "rgba(221, 214, 254, 0.6)"
                  }}
                >
                  <div className={styles.cardBgCircle} style={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap} style={{ backgroundColor: "rgba(139, 92, 246, 0.1)", outline: "1px solid rgba(139, 92, 246, 0.2)" }}>
                        <img
                          className={styles.cardIcon}
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fee0df2cb7a67b753b9de85b630b3f5ea567a17e5.svg?generation=1782490146283126&alt=media"
                          alt="Test"
                        />
                      </div>
                      <span className={styles.cardTitle}>Kiểm tra</span>
                    </div>
                    <div className={styles.cardValueRow}>
                      <span className={styles.cardValue} style={{ color: "rgb(139, 92, 246)" }}>
                        {stats.testVal}
                        <span style={{ fontSize: 16, fontWeight: "normal", color: "#a3acc2", marginLeft: 4 }}>/{stats.testMax}</span>
                      </span>
                    </div>
                    <p className={styles.cardLabel} style={{ marginTop: 4, minHeight: 20 }}>điểm trung bình</p>
                    <div className={styles.cardSubBlock} style={{ marginTop: 12 }}>
                      <CircularProgress percent={stats.testPercent} color="rgb(139, 92, 246)" />
                      <div className={styles.miniChartText}>
                        <p><span style={{ fontWeight: "bold", color: "rgb(109, 40, 217)" }}>{stats.testAttempts}</span></p>
                        <p style={{ marginTop: 2, fontSize: 11 }}>Cao nhất: <span style={{ fontWeight: "bold", color: "rgb(139, 92, 246)" }}>{stats.testVal}</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Giữ chuỗi Card */}
                <div
                  className={styles.statCard}
                  style={{
                    backgroundImage: "linear-gradient(to right bottom, rgb(255, 255, 255), rgba(255, 247, 237, 0.6))",
                    borderColor: "rgba(242, 133, 0, 0.3)"
                  }}
                >
                  <div className={styles.cardBgCircle} style={{ backgroundColor: "rgba(242, 133, 0, 0.05)" }} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap} style={{ backgroundColor: "rgba(242, 133, 0, 0.1)", outline: "1px solid rgba(242, 133, 0, 0.2)" }}>
                        <img
                          className={styles.cardIcon}
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fcbf19fd8a42b770b4815394d8533242753856c7b.svg?generation=1782490146287234&alt=media"
                          alt="Streak"
                        />
                      </div>
                      <span className={styles.cardTitle}>Giữ chuỗi</span>
                    </div>
                    <div className={styles.cardValueRow} style={{ alignItems: "center", gap: 6 }}>
                      <div style={{ width: 28, height: 28 }}>
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc50fd3641da93f6252e941b5221653334b77025e.svg?generation=1782490146314135&alt=media"
                          alt="Streak Flame"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <span className={styles.cardValue} style={{ color: "rgb(242, 133, 0)" }}>{stats.streakVal}</span>
                    </div>
                    <p className={styles.cardLabel} style={{ marginTop: 4, minHeight: 20 }}>chuỗi ngày học</p>
                    <div className={styles.cardSubBlock} style={{ marginTop: 12 }}>
                      <CircularProgress percent={stats.streakPercent} color="rgb(242, 133, 0)" />
                      <div className={styles.miniChartText}>
                        <p>Dài nhất: <span style={{ fontWeight: "bold", color: "rgb(28, 42, 76)" }}>{stats.streakMax}</span> ngày</p>
                        <p style={{ marginTop: 2, fontSize: 11 }}>{stats.streakProgress}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Progress Trends Panel (Biểu đồ tiến bộ) */}
              <div className={styles.panelContainer}>
                <div className={styles.panelHeader}>
                  <h3 className={styles.panelTitle}>
                    <span className={styles.panelTitleIcon}>
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ffdef2a8c87b16406d124ddcd401ebfe908f9bf82.svg?generation=1782490146338983&alt=media"
                        alt="Progress trends"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                    Xu hướng tiến bộ (Biểu đồ tiến bộ)
                  </h3>
                  <div className={styles.panelToggle}>
                    <button
                      onClick={() => setProgressView("week")}
                      className={`${styles.panelToggleBtn} ${progressView === "week" ? styles.panelToggleBtnActive : ""}`}
                    >
                      Theo tuần
                    </button>
                    <button
                      onClick={() => setProgressView("month")}
                      className={`${styles.panelToggleBtn} ${progressView === "month" ? styles.panelToggleBtnActive : ""}`}
                    >
                      Theo tháng
                    </button>
                  </div>
                </div>
                <div className={styles.chartBody} style={{ padding: "30px 40px 10px 40px", height: "auto" }}>
                  <div style={{ width: "100%" }}>

                    {/* Render live SVG line chart */}
                    {progressView === "week" ? <WeekChart /> : <MonthChart />}

                    {/* Legend block below the chart */}
                    <div style={{ marginTop: 16, fontSize: 12, padding: "8px 0" }}>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
                        <li style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ display: "inline-block", width: 12, height: 4, backgroundColor: "rgb(34, 197, 94)", borderRadius: 2 }} />
                          <span style={{ color: "#3d4863", fontWeight: 500 }}>Flashcard</span>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ display: "inline-block", width: 12, height: 4, backgroundColor: "#f59e0b", borderRadius: 2 }} />
                          <span style={{ color: "#3d4863", fontWeight: 500 }}>Lý thuyết</span>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ display: "inline-block", width: 12, height: 4, backgroundColor: "rgb(59, 130, 246)", borderRadius: 2 }} />
                          <span style={{ color: "#3d4863", fontWeight: 500 }}>Bài tập</span>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ display: "inline-block", width: 12, height: 4, backgroundColor: "rgb(139, 92, 246)", borderRadius: 2 }} />
                          <span style={{ color: "#3d4863", fontWeight: 500 }}>Kiểm tra</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              {/* Activity Heat Map Section (Bạn đã chăm chỉ ra sao) */}
              <div className={styles.panelContainer} style={{ padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                  <h3 className={styles.panelTitle}>
                    <span className={styles.panelTitleIcon}>
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F795e06cdf98395cdc7b1cb67370a5ae9f27bad08.svg?generation=1782490146449102&alt=media"
                        alt="Hoạt động học tập"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                    Bạn đã chăm chỉ ra sao? (Hoạt động học tập)
                    <span className={styles.panelTitleSpan}>— Năm 2026</span>
                  </h3>
                  <div className={styles.activityHeaderStats}>
                    <span>Hoạt động <strong>{activeDaysCount}</strong>/ {totalTrackedDays} ngày</span>
                    <span className={styles.activityBadge}>{activePercentage} %</span>
                  </div>
                </div>

                <div className={styles.heatMapScroll}>
                  <div className={styles.heatMapContainer}>
                    {/* Months header label row */}
                    <div className={styles.monthsLabelRow}>
                      <span className={styles.monthLabel} style={{ left: 44 }}>Thg 4</span>
                      <span className={styles.monthLabel} style={{ left: 108 }}>Thg 5</span>
                      <span className={styles.monthLabel} style={{ left: 172 }}>Thg 6</span>
                    </div>

                    {/* Heatmap structure with filled activity data */}
                    <div className={styles.heatMapGridRow}>
                      <div className={styles.daysColumn}>
                        <div className={styles.dayLabel}>T2</div>
                        <div className={styles.dayLabel}>T4</div>
                        <div className={styles.dayLabel}>T6</div>
                        <div className={styles.dayLabel}>CN</div>
                      </div>

                      <div className={styles.weeksContainer}>
                        {Array.from({ length: 14 }).map((_, wIndex) => (
                          <div key={wIndex} className={styles.weekColumn}>
                            {Array.from({ length: 7 }).map((_, dIndex) => {
                              const cellIndex = wIndex * 7 + dIndex;
                              const activityLevel = heatmapCells[cellIndex] || 0;
                              let cellClass = styles.cellL0;

                              if (activityLevel === 1) cellClass = styles.cellL1;
                              else if (activityLevel === 2) cellClass = styles.cellL2;
                              else if (activityLevel === 3) cellClass = styles.cellL3;
                              else if (activityLevel === 4) cellClass = styles.cellL4;

                              // If it's the last column, only render 5 cells to match App.tsx design constraints
                              if (wIndex === 13 && (dIndex === 0 || dIndex === 5 || dIndex === 6)) {
                                return <div key={dIndex} className={styles.cell} style={{ backgroundColor: "transparent" }} />;
                              }
                              return <div key={dIndex} className={`${styles.cell} ${cellClass}`} />;
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.heatMapLegend}>
                  <span>Ít</span>
                  <div className={`${styles.legendBox} ${styles.cellL0}`} />
                  <div className={`${styles.legendBox} ${styles.cellL1}`} />
                  <div className={`${styles.legendBox} ${styles.cellL2}`} />
                  <div className={`${styles.legendBox} ${styles.cellL3}`} />
                  <div className={`${styles.legendBox} ${styles.cellL4}`} />
                  <span>Nhiều</span>
                </div>
              </div>

              {/* Two Column Details Grid: Cần luyện tập thêm & Từ vựng */}
              <div className={styles.detailsGrid}>

                {/* Cần luyện tập thêm (Điểm yếu) */}
                <div className={styles.detailsCard}>
                  <div className={styles.detailsTitleRow}>
                    <div className={styles.detailsIcon}>
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F763cb4c9254469015ffb480e1d973b6ab26f5bf0.svg?generation=1782490146460049&alt=media"
                        alt="Điểm yếu"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <span>Cần luyện tập thêm (Điểm yếu)</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
                    <div style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 12, backgroundColor: "#f9fafb" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontWeight: 600, fontSize: 13, color: "#1c2a4c" }}>Thì hiện tại hoàn thành (Present Perfect)</span>
                        <span style={{ fontWeight: "bold", fontSize: 13, color: "#ef4444" }}>42% chính xác</span>
                      </div>
                      <div className={styles.cardProgressTrack} style={{ height: 6, marginTop: 4 }}>
                        <div className={styles.cardProgressBar} style={{ width: "42%", backgroundColor: "#ef4444" }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                        <button style={{ backgroundColor: "#ef4444", color: "#fff", border: "none", borderRadius: 6, fontSize: 11, padding: "4px 10px", cursor: "pointer", fontWeight: 600 }}>Luyện tập ngay</button>
                      </div>
                    </div>

                    <div style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 12, backgroundColor: "#f9fafb" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontWeight: 600, fontSize: 13, color: "#1c2a4c" }}>Phrasal Verbs with 'Take' & 'Get'</span>
                        <span style={{ fontWeight: "bold", fontSize: 13, color: "#f59e0b" }}>55% chính xác</span>
                      </div>
                      <div className={styles.cardProgressTrack} style={{ height: 6, marginTop: 4 }}>
                        <div className={styles.cardProgressBar} style={{ width: "55%", backgroundColor: "#f59e0b" }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                        <button style={{ backgroundColor: "#f59e0b", color: "#fff", border: "none", borderRadius: 6, fontSize: 11, padding: "4px 10px", cursor: "pointer", fontWeight: 600 }}>Luyện tập ngay</button>
                      </div>
                    </div>

                    <div style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 12, backgroundColor: "#f9fafb" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontWeight: 600, fontSize: 13, color: "#1c2a4c" }}>Câu điều kiện loại 3 & Hỗn hợp</span>
                        <span style={{ fontWeight: "bold", fontSize: 13, color: "#f59e0b" }}>58% chính xác</span>
                      </div>
                      <div className={styles.cardProgressTrack} style={{ height: 6, marginTop: 4 }}>
                        <div className={styles.cardProgressBar} style={{ width: "58%", backgroundColor: "#f59e0b" }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                        <button style={{ backgroundColor: "#f59e0b", color: "#fff", border: "none", borderRadius: 6, fontSize: 11, padding: "4px 10px", cursor: "pointer", fontWeight: 600 }}>Luyện tập ngay</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Từ vựng */}
                <div className={styles.detailsCard}>
                  <div className={styles.detailsTitleRow}>
                    <div className={styles.detailsIcon}>
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ffd81ae03ab31a36a96a82a31799e540361508849.svg?generation=1782490146472628&alt=media"
                        alt="Từ vựng"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <span>Từ vựng</span>
                    <span className={styles.detailsTitleSpan}>Tổng hệ thống: 19561 từ</span>
                  </div>

                  <div>
                    <div className={styles.vocabStatRow}>
                      <span className={styles.vocabBigNumber}>850</span>
                      <span className={styles.vocabLabelText}>
                        <strong>/ 19561</strong> từ đã bắt đầu học
                      </span>
                      <span className={styles.vocabPercentage}>4.3 %</span>
                    </div>

                    <div className={styles.cardProgressTrack}>
                      <div
                        className={styles.cardProgressBar}
                        style={{
                          width: "4.3%",
                          backgroundImage: "linear-gradient(to right, rgb(52, 211, 153), rgb(16, 185, 129))"
                        }}
                      />
                    </div>

                    <div className={styles.vocabGreenPanel}>
                      <div className={styles.vocabGreenIcon}>
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0aa6414df27126c4f446e86e9c2fce9f80285e52.svg?generation=1782490146482383&alt=media"
                          alt="Green Check"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <span className={styles.vocabGreenText}>
                        Trong đó <strong>240</strong> từ đã thuộc
                      </span>
                    </div>
                  </div>

                  <div className={styles.vocabGridList}>
                    <div className={styles.vocabGridItem}>
                      <div className={styles.vocabGridIconWrap}>
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fedd36aac750d4c2b10a666c0fadc7309f90b56fa.svg?generation=1782490146473279&alt=media"
                          alt="Gray Book"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div>
                        <p className={styles.vocabGridValue}>18711</p>
                        <p className={styles.vocabGridLabel}>Chưa học</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Study History Section */}
              <div className={styles.panelContainer}>
                <div className={styles.panelHeader}>
                  <h3 className={styles.panelTitle}>
                    <span className={styles.panelTitleIcon}>
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F936a7ff83cbc23e56ec666597825d459466b1dfe.svg?generation=1782490146853459&alt=media"
                        alt="Lịch sử"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                    Lịch sử học tập
                  </h3>
                  <div className={styles.historyTabs}>
                    <button
                      onClick={() => setHistoryTab("quiz")}
                      className={`${styles.historyTabBtn} ${historyTab === "quiz" ? styles.historyTabBtnActive : ""}`}
                    >
                      <span className={styles.historyTabIcon}>
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5ada226ec04ce5b8e5f78bc5d4dc032075937bfa.svg?generation=1782490146586580&alt=media"
                          alt="Quiz"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                      Quiz
                    </button>
                    <button
                      onClick={() => setHistoryTab("flashcard")}
                      className={`${styles.historyTabBtn} ${historyTab === "flashcard" ? styles.historyTabBtnActive : ""}`}
                    >
                      <span className={styles.historyTabIcon}>
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe4c04ca899d9a60b190cefa5296a3e60b60c47c8.svg?generation=1782490146599805&alt=media"
                          alt="Flashcard"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                      Flashcard
                    </button>
                    <button
                      onClick={() => setHistoryTab("test")}
                      className={`${styles.historyTabBtn} ${historyTab === "test" ? styles.historyTabBtnActive : ""}`}
                    >
                      <span className={styles.historyTabIcon}>
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff343a758417b2a46afc098b661b6d4eebbebc9d5.svg?generation=1782490146588043&alt=media"
                          alt="Test"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </span>
                      Kiểm tra
                    </button>
                  </div>
                </div>

                {/* History table mock */}
                <div style={{ minHeight: 200, padding: 20 }}>
                  {historyTab === "quiz" && (
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, textAlign: "left" }}>
                        <thead>
                          <tr style={{ borderBottom: "1px solid #e5e7eb", color: "#a3acc2" }}>
                            <th style={{ padding: "12px 8px" }}>Bài Quiz</th>
                            <th style={{ padding: "12px 8px" }}>Thời gian</th>
                            <th style={{ padding: "12px 8px" }}>Số câu đúng</th>
                            <th style={{ padding: "12px 8px" }}>Tỷ lệ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "12px 8px", fontWeight: 600, color: "#1c2a4c" }}>Quiz: Thì hiện tại đơn</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>2 giờ trước</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>9/10 câu</td>
                            <td style={{ padding: "12px 8px", fontWeight: "bold", color: "#10b981" }}>90%</td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "12px 8px", fontWeight: 600, color: "#1c2a4c" }}>Quiz: Động từ khuyết thiếu</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>Hôm qua</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>8/10 câu</td>
                            <td style={{ padding: "12px 8px", fontWeight: "bold", color: "#10b981" }}>80%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {historyTab === "flashcard" && (
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, textAlign: "left" }}>
                        <thead>
                          <tr style={{ borderBottom: "1px solid #e5e7eb", color: "#a3acc2" }}>
                            <th style={{ padding: "12px 8px" }}>Chủ đề từ vựng</th>
                            <th style={{ padding: "12px 8px" }}>Thời gian</th>
                            <th style={{ padding: "12px 8px" }}>Số từ đã học</th>
                            <th style={{ padding: "12px 8px" }}>Đánh giá</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "12px 8px", fontWeight: 600, color: "#1c2a4c" }}>Academic Vocabulary - Unit 1</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>3 giờ trước</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>20 từ</td>
                            <td style={{ padding: "12px 8px", fontWeight: "bold", color: "#10b981" }}>Đạt mục tiêu</td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "12px 8px", fontWeight: 600, color: "#1c2a4c" }}>IELTS Topic: Environment</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>3 ngày trước</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>15 từ</td>
                            <td style={{ padding: "12px 8px", fontWeight: "bold", color: "#10b981" }}>Đạt mục tiêu</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {historyTab === "test" && (
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, textAlign: "left" }}>
                        <thead>
                          <tr style={{ borderBottom: "1px solid #e5e7eb", color: "#a3acc2" }}>
                            <th style={{ padding: "12px 8px" }}>Đề kiểm tra</th>
                            <th style={{ padding: "12px 8px" }}>Ngày thi</th>
                            <th style={{ padding: "12px 8px" }}>Thời gian làm bài</th>
                            <th style={{ padding: "12px 8px" }}>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "12px 8px", fontWeight: 600, color: "#1c2a4c" }}>Đề thi thử THPT Quốc gia 2026 - Lần 1</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>25/06/2026</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>58 phút</td>
                            <td style={{ padding: "12px 8px", fontWeight: "bold", color: "rgb(139, 92, 246)" }}>8.2 / 10</td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "12px 8px", fontWeight: 600, color: "#1c2a4c" }}>Mini Test 5: Reading Comprehension</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>20/06/2026</td>
                            <td style={{ padding: "12px 8px", color: "#6b7280" }}>30 phút</td>
                            <td style={{ padding: "12px 8px", fontWeight: "bold", color: "rgb(139, 92, 246)" }}>9.5 / 10</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

            </div>



          </div>
        </div>
      </Content>
    </Layout>
  );
}
