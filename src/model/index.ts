import { PaymentModel,InvoiceModel } from "./tables.model"

export type Invoice = | InvoiceModel 
export type Payment = | PaymentModel 

export * from "./tables.model"
export * from "./response"

export type NewInvoiceDataClone = Invoice & { [key: string]: string | number | boolean };
export type NewPaymentDataClone = Invoice & { [key: string]: string | number | boolean };

export type InvoiceColumn = {
    key: keyof Invoice;
    label: string;
    type: 'string' | 'number' | 'boolean'; // Specify the types for each column
};
export type PaymentColumn = {
    key: keyof Payment;
    label: string;
    type: 'string' | 'number' | 'boolean'; // Specify the types for each column
};

export const emptyPayment: Payment = {
    ID: 0,
    Customer_name: "",
    Street: "",
    City: "",
    State: "",
    Zip_code: "",
    Notes: "",
    Terms: 0
   
   
};

export const emptyInvoice: Invoice = {
    ID: 0,
    Customer_name: "",
    Street: "",
    City: "",
    State: "",
    Zip_code: "",
    Notes: "",
    Terms: 0
   
};