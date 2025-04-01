import React from "react";
import Banner from "./Banner";
import { FiXCircle } from "react-icons/fi";

export default function BannerError({ children, variant = "multiline" }) {
  return (
    <Banner color="error" variant={variant} icon={<FiXCircle />}>
      {children}
    </Banner>
  );
}
