"use client";

import React from "react";

const ICONS = {
  studyPlan:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F02674230bedb9b76851d90a94a77bedceeac3187.svg?generation=1782387732141451&alt=media",
  exercises:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F86341846dcabb7986f98509428f42902b4a419f1.svg?generation=1782387732160885&alt=media",
  lessons:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8f92e6e466f41d80da1e1729496fb3353869e76b.svg?generation=1782387732147793&alt=media",
  locked:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8027f50dce9f743bdb006be54695d1dd6240bfea.svg?generation=1782387732165921&alt=media",
  mascot:
    "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc4237cbf01eeccf22d2b19633ff3a0488e3abd40.svg?generation=1782387690354042&alt=media",
};

interface GoalTask {
  id: string;
  icon: string;
  title: string;
  description?: string;
  actionLabel?: string;
  highlighted?: boolean;
  locked?: boolean;
}

const TASKS: GoalTask[] = [
  {
    id: "study-plan",
    icon: ICONS.studyPlan,
    title: "Khởi tạo Study Plan",
    description: "Cá nhân hóa lộ trình học dành riêng cho bạn",
    actionLabel: "Bắt đầu",
    highlighted: true,
  },
  {
    id: "exercises",
    icon: ICONS.exercises,
    title: "Hoàn thành 2 bài tập",
  },
  {
    id: "lessons",
    icon: ICONS.lessons,
    title: "Hoàn thành 1 bài học",
  },
];

export default function DailyGoalCard() {
  return (
    <div className="daily-goal-card">
      {/* Title */}
      <h2 className="daily-goal-title">🔥 Mục tiêu hôm nay</h2>

      {/* Tasks container */}
      <div className="goal-tasks-wrapper">
        {/* Mascot Bubble */}
        <div className="mascot-bubble">
          <div className="mascot-bubble-text">
            Bắt tay vào làm nhiệm vụ đầu tiên thôi Huỳnh Tấn Toàn ơi!
          </div>
          <img
            src={ICONS.mascot}
            alt="Mascot Icon"
            className="mascot-img"
            style={{ width: "auto", height: 80 }}
          />
        </div>

        {/* Task List */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {TASKS.map((task) => (
            <div
              key={task.id}
              className={`goal-task-item${task.highlighted ? " highlighted" : ""}`}
            >
              {/* Icon */}
              <div style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={task.icon} alt={task.title} className="goal-task-icon" />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <p className="goal-task-title">{task.title}</p>
                {task.description && (
                  <p className="goal-task-desc">{task.description}</p>
                )}
              </div>

              {/* Action Button */}
              {task.actionLabel && (
                <button className="goal-start-btn">
                  <span>{task.actionLabel}</span>
                </button>
              )}
            </div>
          ))}

          {/* Locked task */}
          <div className="goal-task-item">
            <div style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={ICONS.locked} alt="locked" className="goal-task-icon" />
            </div>
            <div style={{ flex: 1 }}>
              <p className="goal-task-locked-text">
                Hoàn thành nhiệm vụ chính để mở khóa nhiệm vụ tự chọn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
