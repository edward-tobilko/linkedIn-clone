import React from "react";

type CallbackType = () => Promise<void>;

type UseFetchingTypes = {
  fetching: () => void;
  loading: boolean;
  error: string;
};

export const useFetching = (callback: CallbackType): UseFetchingTypes => {
  const [loading, setLoading] = React.useState<boolean>(false);
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

  return { fetching, loading, error };
};
