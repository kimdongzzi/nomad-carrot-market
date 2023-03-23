import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState<UseMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setState({ ...state, loading: true });
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then(setState)
      .catch(setState)
      .finally(() => setState({ ...state, loading: false }));
  }
  return [mutation, state];
}
