import React from "react";

type CallbackType = () => Promise<void>;

type UseFetchingTypes = {
  fetching: () => void;
  loading: boolean;
  error: string;
};

export const useFetching = (callback: CallbackType): UseFetchingTypes => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  async function fetching() {
    try {
      setLoading(true);
      await callback();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return { fetching, loading, error };
};
