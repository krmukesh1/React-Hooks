import { useEffect, useState } from "react";

const UseTitleCount = () => {
  const [count, setCount] = useState(0);
  // custom Hooks
  //   UseTitleCount(count);
  useEffect(() => {
    console.log("I am first one");
    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = `chats `;
    }
  }, [count]);
};

export default UseTitleCount;
