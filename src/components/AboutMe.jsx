import styled from "styled-components";
import {Element} from "react-scroll";
// Data
import {moreInfo} from "../assets/intro.js";
// Components
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "./globalStyledComponents";
import profile_img from "../assets/profile_pic.jpg";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
    margin-bottom: 1rem; /* Adds space between paragraphs */
    text-align: justify; /* Justify text for better alignment */
    line-height: 1.5; /* Adjust line height for readability */
  }

  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe(state) {

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {moreInfo.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={profile_img}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{width: "15rem", height: "15rem"}}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
