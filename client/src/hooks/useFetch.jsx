import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetch(url, options, { signal: abortController.signal })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error);
        }
      })
      .finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, [url, options]);

  return { data, error, isLoading };
}

export default useFetch;
