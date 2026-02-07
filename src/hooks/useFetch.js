// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export default function useFetch(fetchFn, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = async () => {
    try {
      setLoading(true);
      const response = await fetchFn();
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    execute();
  }, dependencies);

  return { data, loading, error, refresh: execute };
}
