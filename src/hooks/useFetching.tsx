import React from "react";

export const useFetching = (callback: () => void) => {
  const [loading, setLoading] = React.useState<any>(false);
  const [error, setError] = React.useState<string>("");

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
