import { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTtime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTtime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      This is the Current-time : {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
