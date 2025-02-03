import { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./Child";
import CustomHook from "./CustomHook";

export default function HookPage() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useEffect - hooksPage");
  }, []);

  useEffect(() => {
    console.log(`useEffect - Chạy mỗi lần number thay đổi ${number}`);
  }, [number]);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log(`useEffect đổi màu`);
    }, 1000);
    return () => {
      //clear interval, clear tài nguyên không còn sử dụng
      clearInterval(interval);
    };
  }, []);

  const handleTest = () => {
    console.log("Handle Test");
  };

  // Hooks - useCallBack
  const handleCatch = useCallback(handleTest, []);

  const handleCountUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  // Hooks - useMemo
  const countUpCache = useMemo(() => handleCountUp(), []);

  return (
    <div>
      <h1>HookPage</h1>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>

      <h1>Number up: {countUpCache}</h1>

      <hr />

      <Child handleTest={handleCatch} />

      <hr />

      <CustomHook />
    </div>
  );
}
