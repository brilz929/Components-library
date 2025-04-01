import React from "react";
import classNames from "classnames";


export default function Banner({ color, variant, icon, children }) {
  return (
    <div className={classNames("banner", `banner-${color}`, `banner-${variant}`)}>
      {icon && <span className="banner-icon">{icon}</span>}
      <div className="banner-content">{children}</div>
    </div>
  );
}