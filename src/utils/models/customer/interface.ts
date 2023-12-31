export interface Customers {
    ID: number,
    Customer_name: string,    
    City: string,
    Account_number: string,
    Balance: string,
    Language: string,
    Id_currency: number,
    Id_country: number,
}

export interface CustomerData {
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
    const emptyUser: Customers = {
        ID: 0,
        Customer_name: "",
        City: "",
        Account_number: "",
        Balance: "",
        Language: "",
        Id_currency: 0,
        Id_country: 0,
    };