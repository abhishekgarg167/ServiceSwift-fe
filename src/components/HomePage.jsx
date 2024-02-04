import React, { useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import Cards from "./Cards";
import mechanicPic from '../pics/mechanic.jpg'
import plumberPic from '../pics/plumber1.jpg'
import electricianPic from '../pics/electrician.jpg'
const HomePage = () => {
  useEffect(()=>{
    localStorage.removeItem("active_email")
  },[])
  return (
    <>
      <div>
        <h1 className="text-center my-4">Welcome to Client - Service Provider Website</h1>

        <Row className="justify-content-md-center">
        <Col md={3}>
          <Cards title="Profile page" imgSrc={mechanicPic} showLink={false} desc={'Our platform offers a comprehensive solution for connecting users with a variety of essential services.'}/>
        </Col>
        <Col md={3}>
          <Cards title="Post Req" showLink={false} imgSrc={plumberPic}  desc={'From plumbing and electrical work to mechanical repairs, we bridge the gap between service providers and individuals in need.'}/>
        </Col>
        <Col md={3}>
          <Cards title="Find Service Provider" showLink={false} imgSrc={electricianPic}  desc={'Our user-friendly interface allows users to easily find and engage with skilled professionals in these fields'}/>
        </Col>
      </Row>

    </div>
    </>
  );
};
export default HomePage;
