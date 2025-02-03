import { memo } from "react";

function Child() {
  console.log("Hahahaa");
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
}
export default memo(Child);
