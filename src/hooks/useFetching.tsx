import { useState } from "react";

export const useFetching = (callback: any) => {
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<string>("");

  async function fetching() {
    try {
      setLoading(true);
      await callback();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return [fetching, loading, error];
};