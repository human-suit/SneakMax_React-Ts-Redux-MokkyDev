import { useEffect, useState } from "react";

// enum DeviceType {
//     MOBILE = "MOBILE",
//     TABLE = "TABLE",
//     DESKTOP = "DESKTOP"
// }

const useDeviseType = () => {
  const [deviseType, setDeviseType] = useState(getDeviceType());

  useEffect(() => {
    const updateWindowsSize = () => {
      setDeviseType(getDeviceType);
    };
    window.addEventListener("resize", updateWindowsSize);

    return () => {
      window.removeEventListener("resize", updateWindowsSize);
    };
  }, []);

  return deviseType;
};

const getDeviceType = () => {
  const width = window.innerWidth;
  return width;
};

export default useDeviseType;
