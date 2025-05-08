//组件就是函数
import React from "react";
import { useState } from "react";
const Counter = () => {
  //计数器，记录数字 Count,SetCount
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if(count>0) setCount(count - 1);
  };

  return (
    <div>
      <p>Current count:{count}</p>
      <button onClick={increment}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};
export default Counter;
