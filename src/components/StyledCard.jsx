import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../assets/GH.svg";
// Components
import { Card } from "react-bootstrap";

// const StyledCardComponent = styled.div`
//   .card {
//     color: ${({ theme }) => theme.color};
//     background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
//     box-shadow: ${({ theme }) =>
//       theme.name === "light"
//         ? "0 3px 10px rgb(0 0 0 / 0.2)"
//         : "0 3px 10px rgb(255 255 255 / 0.2)"};

//     .card-link {
//       text-decoration: none;
//       font-size: 1.5rem;
//       color: ${({ theme }) => theme.color};

//       &:hover {
//         color: var(--primary);
//       }
//     }

//     .card-footer {
//       border-top: var(--border);
//       background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
//     }
//   }
// `;

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};
        width: 300px; /* Adjust the width as needed */
        height: 350px; /* For automatic height adjustment based on content */
        margin: auto;

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }

    .card-img-top {
      width: 100%; /* Make image width 100% of the card width */
      height: 200px; /* Maintain aspect ratio */
      object-fit: cover; /* Cover the frame, but might crop the image */
      max-height: 200px; /* Adjust based on your preference */
    }
  }
`;


export default function StyledCard({ image, name, description, url, demo }) {
  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {demo !== "" && demo !== null ? (
            <Card.Link href={demo}>
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"View on GitHub "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}
