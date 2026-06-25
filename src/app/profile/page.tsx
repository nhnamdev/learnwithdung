"use client";

import React, { useState } from "react";
import { Layout, Grid, Drawer } from "antd";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export default function ProfilePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const screens = useBreakpoint();
  const isDesktop = !!screens.lg;

  const handleMenuClick = () => {
    if (isDesktop) {
      setSidebarPinned((prev) => !prev);
    } else {
      setDrawerOpen(true);
    }
  };

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
          <div className="content-wrapper" style={{ padding: "40px 20px" }}>
            <h1 className="section-title" style={{ marginBottom: 20 }}>
              Hồ sơ cá nhân
            </h1>
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 4px 0px",
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              Thông tin hồ sơ cá nhân và tiến độ học tập đang được cập nhật...
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
