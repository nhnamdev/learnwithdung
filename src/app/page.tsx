"use client";

import React, { useState, useEffect } from "react";
import { Layout, Drawer } from "antd";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import GreetingSection from "@/components/GreetingSection";
import DailyGoalCard from "@/components/DailyGoalCard";
import RecentLessonCard from "@/components/RecentLessonCard";
import StudyPlanCard from "@/components/StudyPlanCard";
import MyCoursesSection from "@/components/MyCoursesSection";
import TestPracticeCard from "@/components/TestPracticeCard";
import LearningProfile from "@/components/LearningProfile";

const { Content } = Layout;

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMenuClick = () => {
    if (isDesktop) {
      setSidebarPinned((prev) => !prev);
    } else {
      setDrawerOpen(true);
    }
  };

  return (
    <Layout className="app-layout">
      {/* Fixed Header */}
      <AppHeader onMenuClick={handleMenuClick} />

      {/* Hover trigger strip - hidden on mobile via CSS */}
      <div className="sider-hover-trigger" />

      {/* Desktop Sidebar */}
      <div
        className={`app-sider${sidebarPinned ? " sider-pinned" : ""}`}
        style={{ width: 240 }}
      >
        <AppSidebar />
      </div>

      {/* Mobile Drawer Sidebar */}
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
        <AppSidebar />
      </Drawer>

      {/* Main Content */}
      <Content className="app-content">
        <div className="main-scroll">
          <div className="content-wrapper">
            {/* Greeting */}
            <GreetingSection />

            {/* Two-column layout */}
            <div
              style={{
                display: "flex",
                gap: 32,
                flexWrap: "wrap-reverse",
                alignItems: "stretch",
                paddingTop: 20,
              }}
            >
              {/* Left Column - Main Content */}
              <div style={{ flex: "1 1 500px", minWidth: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                  {/* Daily Goal */}
                  <DailyGoalCard />

                  {/* Recent Lesson */}
                  <div>
                    <p className="section-title" style={{ marginBottom: 20 }}>
                      Bài học gần nhất
                    </p>
                    <RecentLessonCard />
                  </div>

                  {/* Study Plan */}
                  <div>
                    <p className="section-title" style={{ marginBottom: 20 }}>
                      Study Plan
                    </p>
                    <StudyPlanCard />
                  </div>

                  {/* My Courses */}
                  <MyCoursesSection />

                  {/* Test Practice */}
                  <div>
                    <div className="section-header">
                      <p className="section-title">Test Practice</p>
                      <p className="section-link">Xem tất cả</p>
                    </div>
                    <TestPracticeCard />
                  </div>
                </div>
              </div>

              {/* Right Column - Learning Profile */}
              <div style={{ flex: "0 0 352px", minWidth: 280 }}>
                <LearningProfile />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
