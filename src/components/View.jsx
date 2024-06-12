import React from "react";
import VideoCard from "./VideoCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function View() {
  return (
    <>
      <Row className="w-100 ms-3 ms-md-0">
        <Col
          xs={12}
          md={6}
          lg={3}
          xl={3}
          className="d-flex justify-content-center align-items-center"
        >
          <VideoCard />
        </Col>{" "}
        <Col
          xs={12}
          md={6}
          lg={3}
          xl={3}
          className="d-flex justify-content-center align-items-center"
        >
          <VideoCard />
        </Col>{" "}
        <Col
          xs={12}
          md={6}
          lg={3}
          xl={3}
          className="d-flex justify-content-center align-items-center"
        >
          <VideoCard />
        </Col>{" "}
        <Col
          xs={12}
          md={6}
          lg={3}
          xl={3}
          className="d-flex justify-content-center align-items-center"
        >
          <VideoCard />
        </Col>
      </Row>
    </>
  );
}

export default View;
