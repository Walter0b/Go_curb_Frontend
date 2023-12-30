import { useQuery } from 'react-query';

interface FetchDataOptions {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object;
}

export const fetchData = async ({ endpoint, method = 'GET', body }: FetchDataOptions) => {
  const baseEndpoint = import.meta.env.VITE_API_BASE_URL;
  const fullEndpoint = `${baseEndpoint}${endpoint}`;

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(fullEndpoint, config);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json();
};

export const useApiQuery = (options: FetchDataOptions) => {
  return useQuery(options.endpoint, () => fetchData(options));
};
