import React from "react";
import classNames from "classnames";

export default function Badge({ type, color, children }) {
  const shapeClass = type && `badge-${type}`;
  const colorClass = color && `badge-${color}`;
  const allClasses = classNames("badge", shapeClass, colorClass);

  return <span className={allClasses}>{children}</span>;
}