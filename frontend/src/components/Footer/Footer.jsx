import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

import "./Footer.css";

const Footer = () => {
  const { user } = useTelegram();

  return (
    <div className={"footer"}>
      <span>{user?.username}</span>
    </div>
  );
};

export default Footer;
