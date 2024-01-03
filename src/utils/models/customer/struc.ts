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
    { id: 'ID', label: 'ID', type: 'number', span: 1, autoComplete: 'off', placeHolder: 'e.g. 123' },
    { id: 'Customer_name', label: 'Customer Name', type: 'text', span: 3, autoComplete: 'given-name', placeHolder: 'e.g. John Doe' },
    { id: 'City', label: 'City', type: 'text', span: 4, autoComplete: 'address-level2', placeHolder: 'e.g. New York' },
    { id: 'Account_number', label: 'Account Number', type: 'text', span: 4, autoComplete: 'off', placeHolder: 'e.g. ABC123' },
    { id: 'Balance', label: 'Balance', type: 'text', span: 2, autoComplete: 'off', placeHolder: 'e.g. 1000.00' },
    { id: 'Language', label: 'Language', type: 'text', span: 2, autoComplete: 'off', placeHolder: 'e.g. en' },
    { id: 'Id_currency', label: 'Currency ID', type: 'number', span: 2, autoComplete: 'off', placeHolder: 'e.g. 1' },
    { id: 'Id_country', label: 'Country ID', type: 'number', span: 2, autoComplete: 'country-name', placeHolder: 'e.g. 840' },
];

