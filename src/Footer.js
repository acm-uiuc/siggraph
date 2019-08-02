import React from "react";
import { Mail, Facebook, Slack, Instagram } from "react-feather";

const links = [
  {
    icon: <Mail />,
    address: "mailto:siggraphuiuc@gmail.com"
  },
  { icon: <Facebook />, address: "https://www.facebook.com/uiucacmsiggraph/" },
  { icon: <Slack />, address: "https://siggraphuiuc.slack.com" },
  {
    icon: <Instagram />,
    address: "https://www.instagram.com/siggraph.uiuc/"
  }
];

const Footer = () => (
  <footer className="footer">
    <span className="copyright">
      Copyright {"\u00A9 2018-" + new Date().getFullYear()} ACM SIGGRAPH UIUC
    </span>
    <span className="footer-links">
      {links.map(link => (
        <a
          key={link.address}
          className="mr-3"
          href={link.address}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </span>
  </footer>
);

export default Footer;
