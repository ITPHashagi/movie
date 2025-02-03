import "./style.scss";
import { useState, useEffect } from "react";
import { useRandomColor } from "./useColor";

export default function Circle() {
  const color = useRandomColor();

  return (
    <div>
      <div className="square rounded-full" style={{ backgroundColor: color }}>
        Circle
      </div>
    </div>
  );
}
