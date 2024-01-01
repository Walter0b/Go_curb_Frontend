export const CustomersColumns = [
    { key: 'ID', label: 'id' },
    { key: 'Customer_name', label: 'Name' },
    { key: 'City', label: 'City' },
    { key: 'Balance', label: 'Balance' },
    { key: 'Language', label: 'Language' },
    { key: 'Id_currency', label: 'Currency ID' },
    { key: 'Id_country', label: 'Country ID' },
];
export const CustomerFields = [
    { id: 'ID', label: 'ID', type: 'number', span: 1, autoComplete: 'off' },
    { id: 'Customer_name', label: 'Customer Name', type: 'text', span: 3, autoComplete: 'given-name' },
    { id: 'City', label: 'City', type: 'text', span: 4, autoComplete: 'address-level2' },
    { id: 'Account_number', label: 'Account Number', type: 'text', span: 4, autoComplete: 'off' },
    { id: 'Balance', label: 'Balance', type: 'text', span: 2, autoComplete: 'off' },
    { id: 'Language', label: 'Language', type: 'text', span: 2, autoComplete: 'off' },
    { id: 'Id_currency', label: 'Currency ID', type: 'number', span: 2, autoComplete: 'off' },
    { id: 'Id_country', label: 'Country ID', type: 'number', span: 2, autoComplete: 'country-name' },
];
