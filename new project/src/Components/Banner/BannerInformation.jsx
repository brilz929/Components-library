import React from "react";
import Banner from "./Banner";
import { FiInfo } from "react-icons/fi";

export default function BannerInformation({ children, variant}) {
  return (
    <Banner color="neutral" variant={variant} icon={<FiInfo />}>
      {children}
    </Banner>
  )
}