import { useState } from "react";

export function useLoad<ResponseType = string, ErrorType = string | Error>(): { response: ResponseType | undefined, error: ErrorType | undefined, isLoading: boolean, load: (fn: () => Promise<ResponseType>) => void } {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<ResponseType | undefined>(undefined);
  const [error, setError] = useState<ErrorType | undefined>(undefined);

  async function load(fn: () => Promise<ResponseType>) {
    setLoading(true);
    try {
      const payload = await fn();
      setLoading(false);
      setResponse(payload);
      setError(undefined);
    } catch (error) {
      setLoading(false);
      setError(error as ErrorType);
      setResponse(undefined);
    }
  }
  return { response, error, isLoading: loading, load };
}