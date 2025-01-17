import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import Layout from "../../Layout";
const Courses = (props) => {
  const SearchProps = {
    placeholder: "Search Course",
  };

  const filterDropProps = {
    name: "Filter by",
    Icon: BsFilter,
    options: [
      { name: "Course - 1", path: "/playCourse" },
      { name: "Course - 2", path: "/playCourse" },
    ],
  };
  const ImageCardProps = {
    label: "ImageCardComp",
    imgUrl: "https://picsum.photos/318/180",
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    type: "Health",
  };

  const CoursesList = [
    {
      text: "Courses to help you learn about",
      title: "Inspiration",
      cards: [
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Our Future",
          count: "1,288 students",
          time: "5m",
          type: "Inspiration",
        },
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Solver in us",
          count: "1,288 students",
          time: "5m",
          type: "Inspiration",
        },
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Innovation for better life",
          count: "1,288 students",
          time: "5m",
          type: "Inspiration",
        },
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Sustainable Development Goals",
          count: "1,288 students",
          time: "5m",
          type: "Inspiration",
        },
      ],
    },
    {
      text: "Courses to help you learn about",
      title: "How to think about an innovation",
      cards: [
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Thinking Critically and Creatively",
          count: "1,288 students",
          time: "5m",
          type: "Innovation",
        },
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Brainstorming techniques + Generating solutions",
          count: "1,288 students",
          time: "5m",
          type: "Innovation",
        },
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Selecting a solution",
          count: "1,288 students",
          time: "5m",
          type: "Innovation",
        },
        {
          label: "ImageCardComp",
          imgUrl: "https://picsum.photos/318/180",
          title: "Sustainable Development Goals",
          count: "1,288 students",
          time: "5m",
          type: "Innovation",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="courses-page">
        <Row className="courses-head view-head w-100 mx-0 bg-white">
          <Col md={12} lg={6}>
            <h2 className="my-auto">Courses by Unisolve</h2>
          </Col>
          <Col md={12} lg={6}>
            <div className="d-flex filter-drop w-100 pr-0">
              <Row className="w-100">
                <Col md={9} lg={9}>
                  <InputWithSearchComp {...SearchProps} />
                </Col>
                <Col md={3} lg={3}>
                  <CommonDropDownComp {...filterDropProps} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Container>
          {/* <Row className="m-0"> */}
          {/* <Col className="p-0"> */}
          <div className="courses-list pt-5 mt-5">
            {CoursesList &&
              CoursesList.map((course,i) => {
                return (
                  <div key={i} className="courses-list   pb-5">
                    <p>{course.text}</p>
                    <div className="d-flex justify-content-between mb-3 mobile-view">
                      <h2>{course.title}</h2>
                    </div>
                    <Row className=" mb-5 course-section">
                      {course.cards.map((item, index) => {
                        return (
                          <ImageCardComp
                            {...item}
                            key={index}
                            onClick={() => props.history.push("/playCourse")}
                          />
                        );
                      })}
                    </Row>
                  </div>
                );
              })}
          </div>
          {/* </Col> */}
          {/* </Row> */}
        </Container>
      </div>
    </Layout>
  );
};

export default withRouter(Courses);
