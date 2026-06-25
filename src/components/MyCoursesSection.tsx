"use client";

import React from "react";
import { Row, Col } from "antd";
import CourseCard from "./CourseCard";

const COURSES = [
  {
    id: "toeic-lr-800",
    title: "TOEIC LR 800+",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Feb7c1e039aa05154d1e84249cce2e9a995dcb06f.jpg?generation=1782387690524090&alt=media",
    studiedUnits: 2,
    totalUnits: 32,
    studiedLessons: 1,
    totalLessons: 64,
    exerciseIcon:
      "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd973cbfe6435a0d1a31bfd0987952a78b0d02119.svg?generation=1782387732350811&alt=media",
  },
  {
    id: "toeic-lr-600",
    title: "TOEIC LR 600+",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F30b48594c71f47ba5acf730c0cbf12221d751109.jpg?generation=1782387690533911&alt=media",
    studiedUnits: 2,
    totalUnits: 43,
    studiedLessons: 3,
    totalLessons: 86,
    exerciseIcon:
      "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F2d184cc465f831481c5d757b99127024c7fcdbbc.svg?generation=1782387732344931&alt=media",
  },
  {
    id: "toeic-vocab",
    title: "Từ Vựng TOEIC Chuyên Sâu",
    image:
      "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F0aab811d48fbe42a4be7e8afda9f70fc1689f3ac.jpg?generation=1782387690534529&alt=media",
    studiedUnits: 2,
    totalUnits: 19,
    studiedLessons: 5,
    totalLessons: 38,
    exerciseIcon:
      "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F95de878b39077b8c2891de4a636939db588caf75.svg?generation=1782387732318231&alt=media",
  },
];

export default function MyCoursesSection() {
  return (
    <div>
      <div className="section-header">
        <p className="section-title">Khoá học của tôi</p>
        <p className="section-link">Xem tất cả</p>
      </div>

      {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <Row gutter={[20, 20]}>
        {COURSES.map((course) => (
          <Col key={course.id} xs={24} sm={12} lg={8}>
            <CourseCard
              title={course.title}
              image={course.image}
              studiedUnits={course.studiedUnits}
              totalUnits={course.totalUnits}
              studiedLessons={course.studiedLessons}
              totalLessons={course.totalLessons}
              exerciseIcon={course.exerciseIcon}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
