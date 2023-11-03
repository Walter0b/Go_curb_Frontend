export interface User {
    ID: number,
    Customer_name: string,
    Street: string,
    City: string,
    State: string,
    Zip_code: string,
    Notes: string,
    Terms: number,
    Account_number: string,
    Tax_id: string,
    Balance: string,
    Is_active: boolean,
    Is_sub_agency: boolean,
    Language: string,
    Slug: number,
    Id_currency: number,
    Id_country: number,
    Irs_share_key: string,
    Currency_rate: number,
    Agency: string,
    Avoid_deletion: boolean,
    Is_editable: boolean,
    Alias: string,
    Already_used: number,
    Ab_key: string,
    Tmc_client_number: string,
    isEditing: boolean
}

export interface userData {
    id: number;
    isClicked: boolean;
    isEditing: boolean;
  }
 export interface Currency {
    ID: number;
    Name: string;
  }
  
  export interface Country {
    ID: number;
    Name: string;
  }

  export 
  const emptyUser: User = {
      ID: 0,
      Customer_name: "",
      Street: "",
      City: "",
      State: "",
      Zip_code: "",
      Notes: "",
      Terms: 0,
      Account_number: "",
      Tax_id: "",
      Balance: "",
      Is_active: false,
      Is_sub_agency: false,
      Language: "",
      Slug: 0,
      Id_currency: 0,
      Id_country: 0,
      Irs_share_key: "",
      Currency_rate: 0,
      Agency: "",
      Avoid_deletion: false,
      Is_editable: false,
      Alias: "",
      Already_used: 0,
      Ab_key: "",
      Tmc_client_number: "",
      isEditing: false
  };