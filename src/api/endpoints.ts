// apiEndpoints.ts
const baseEndpoint = import.meta.env.VITE_API_BASE_URL;

export const apiEndpoints = {
  base: baseEndpoint,
  customers: 'customers',
  invoices: 'invoices',
  payments: 'payments',
};
