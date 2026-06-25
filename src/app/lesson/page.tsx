"use client";

import React, { useState } from "react";
import { Layout, Grid, Drawer, Breadcrumb } from "antd";
import { MenuOutlined, HomeOutlined } from "@ant-design/icons";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import VideoPlayer from "@/components/lesson/VideoPlayer";
import LessonDocuments from "@/components/lesson/LessonDocuments";
import DiscussionPanel from "@/components/lesson/DiscussionPanel";
import LessonPlaylist from "@/components/lesson/LessonPlaylist";
import ViewModeSelector from "@/components/lesson/ViewModeSelector";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const QUIZ_POINTS = [
  { label: "Quiz 1 41:26", percent: 74.4 },
  { label: "Quiz 2 43:39", percent: 78.4 },
  { label: "Quiz 3 49:43", percent: 89.3 },
];

const DOCUMENTS = [
  {
    name: "[ Cô Vũ Mai Phương ] Từ loại (Lý thuyết - Buổi 1)_ Danh từ.pdf",
    url: "#",
  },
];

const HOMEWORK_TASKS = ["EZ Vocab"];

export default function LessonPage() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="lp-page-root">
      {/* ── Sticky header ── */}
      <AppHeader onMenuClick={() => setDrawerOpen(true)} />

      {/* ── Breadcrumb ── */}
      <div className="lp-breadcrumb-bar">
        <div className="lp-breadcrumb-inner">
          <Breadcrumb
            separator="›"
            items={[
              { title: "Trang chủ" },
              { title: "Danh mục khoá học" },
              { title: "Ngữ pháp Ứng dụng (2027)" },
              { title: "CHUYÊN ĐỀ 01: TỪ LOẠI | LÝ THUYẾT TRỌNG TÂM VÀ ỨNG DỤNG" },
              {
                title: (
                  <span style={{ color: "#f40c44" }}>Từ loại (Lý thuyết - Buổi 1)</span>
                ),
              },
            ]}
            style={{ fontSize: 13 }}
          />
        </div>
      </div>

      <Layout style={{ background: "transparent", minHeight: "calc(100vh - 60px)" }}>
        {/* ── Desktop Sidebar ── */}
        {!isMobile && (
          <div className="app-sider lp-sider">
            <div className="sider-hover-trigger">
              <AppSidebar />
            </div>
          </div>
        )}

        {/* ── Mobile Drawer ── */}
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          placement="left"
          size="default"
          styles={{ body: { padding: 0 } }}
          title={null}
        >
          <AppSidebar />
        </Drawer>

        {/* ── Main Content ── */}
        <Content className="lp-content">
          <div className={`lp-main-grid${isMobile ? " lp-main-grid-mobile" : ""}`}>

            {/* ── LEFT: Video + docs + homework ── */}
            <div className="lp-left-col">

              {/* Video Player */}
              <VideoPlayer
                title="Từ loại (Lý thuyết - Buổi 1)"
                remainingViews={10}
                totalViews={10}
                duration="55:40"
                quizPoints={QUIZ_POINTS}
              />

              {/* Homework */}
              <div className="lp-homework-bar">
                <span className="lp-homework-label">Nhiệm vụ sau buổi học:</span>
                <div className="lp-homework-tasks">
                  {HOMEWORK_TASKS.map((task) => (
                    <button key={task} className="lp-homework-task-btn">
                      📖&nbsp;&nbsp;{task}
                    </button>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="lp-card" style={{ marginTop: 12 }}>
                <LessonDocuments documents={DOCUMENTS} />
              </div>
            </div>

            {/* ── RIGHT: View selector + Discussion + Playlist ── */}
            <div className={`lp-right-col${isMobile ? "" : " lp-right-sticky"}`}>
              <div className="lp-card">
                {/* View mode tabs */}
                <ViewModeSelector />

                {/* Discussion */}
                <DiscussionPanel />
              </div>

              {/* Playlist */}
              <LessonPlaylist />
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}
