import React from "react";
import { Mail } from "react-feather";
import { Facebook, Slack, Instagram, Discord } from "@icons-pack/react-simple-icons";

const links = [
  {
    icon: <Mail />,
    address: "mailto:siggraphuiuc@gmail.com"
  },
  { icon: <Facebook />, address: "https://www.facebook.com/uiucacmsiggraph/" },
  {
    icon: <Instagram />,
    address: "https://www.instagram.com/siggraph.uiuc/"
  },
  {
    icon: <Discord />,
    address: "https://discord.gg/QtKSUBgJe3"
  },
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
