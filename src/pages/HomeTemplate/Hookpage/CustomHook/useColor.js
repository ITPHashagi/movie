import { useState, useEffect } from "react";

function useRandomColor() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    setInterval(() => {
      //random color
      const color = Math.floor(Math.random() * 999999);
      setColor(`#${color}`);
    }, 2000);
  }, []);

  return color;
}

export { useRandomColor };
