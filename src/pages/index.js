import * as React from "react";

import icon from '../images/icon.svg';
import logo from '../images/logo.svg';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 420,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const services = [
  {
    text: "MVP Development",
    description:
      "We specialize in crafting Minimum Viable Products to quickly test and validate your ideas, helping you get to market faster.",
    color: "#E95800",
  },
  {
    text: "AI Product Creation",
    description:
      "From concept to deployment, we integrate AI technologies to give your products an edge in the evolving tech landscape.",
    color: "#1099A8",
  },
  {
    text: "Full-Stack Engineering",
    description:
      "Our team offers end-to-end development services, covering frontend, backend, and infrastructure setup.",
    color: "#BC027F",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <img src={logo} alt="Kwole Logo" />
      <h1 style={headingStyles}>
        <br />
        <span style={headingAccentStyles}>
          Your local development team in <code style={codeStyles}>California, CA</code>
        </span>
      </h1>
      <p style={paragraphStyles}>
        We specialize in MVPs and AI product creation to bring your ideas to
        life. Whether you're a startup or an established business, our goal is
        to turn your vision into reality.
      </p>
      <ul style={listStyles}>
        {services.map((service) => (
          <li key={service.text} style={{ ...listItemStyles, color: service.color }}>
            <span>
              <strong>{service.text}</strong>
              <p style={descriptionStyle}>{service.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <p style={paragraphStyles}>
        Want to learn more? Reach out to us at{" "}
        <a href="mailto:contact@kwole.com" style={linkStyle}>
          contact@kwole.com
        </a>
        .
      </p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Kwole - Local Dev Team in California</title>;
