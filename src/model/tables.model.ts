export interface InvoiceModel {
  Date: string;
  ID: string;
  Customer_name: string;
  Status: string;
  Due_date: string;
  Currency: string;
  Amount: number;
  balance: number; //type text
 
  
  
}
export interface PaymentModel {
  ID: number;
  Customer_name: string;
  Street: string;
  City: string;
  State: string;
  Zip_code: string;
  Notes: string; //type text
  Terms: number;
  
  
}

 
