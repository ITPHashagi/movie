import "./style.scss";
import { useRandomColor } from "./useColor";

export default function Square() {
  const color = useRandomColor();

  return (
    <div>
      <h1 className="square" style={{ backgroundColor: color }}>
        Square
      </h1>
    </div>
  );
}
