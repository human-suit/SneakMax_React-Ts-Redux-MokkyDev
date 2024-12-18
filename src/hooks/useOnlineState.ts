import { useEffect, useState } from "react";

const useOnlineState = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => {
      setOnline(navigator.onLine);
    };
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return isOnline;
};

export default useOnlineState;
