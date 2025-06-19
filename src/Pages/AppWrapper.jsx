// src/AppWrapper.jsx
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";

function AppWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading saat route berubah
    setLoading(true);

    // Timeout seolah-olah sedang fetching data
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // bisa sesuaikan waktunya

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className={loading ? "pointer-events-none opacity-20" : ""}>
        {children}
      </div>
    </>
  );
}

export default AppWrapper;
