import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    if (!response.ok)
      return setError(response.originalError.response.data.error);
    setData(response.data);
    setError(false);
  };
  return { data, error, loading, request };
};
