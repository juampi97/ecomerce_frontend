import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then(({ status, payload }) => {
        if (status == "success") setData(payload);
        else setError(payload);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
}