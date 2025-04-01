import React from "react";
import Banner from "./Banner";
import { FiCheckCircle } from "react-icons/fi";

export default function BannerSuccess({ children, variant}) {
  return (
    <Banner color="success" variant={variant} icon={<FiCheckCircle />}>
      {children}
    </Banner>
  );
}