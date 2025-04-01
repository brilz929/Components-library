import React from "react";
import Banner from "./Banner";
import { FiAlertTriangle } from "react-icons/fi";

export default function BannerAttention({ children, variant}) {
  return (
    <Banner color="warning" variant={variant} icon={<FiAlertTriangle />}>
      {children}
    </Banner>
  );
}