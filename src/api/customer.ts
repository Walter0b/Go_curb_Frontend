import axios from 'axios'
import { User } from "../models/interfaces";

export function getData() {
    return axios.get('http://localhost:8080');
}

export function getCountries() {
    return axios.get('http://localhost:8080/Countries')
}

export function getCurrencies() {
    return axios.get('http://localhost:8080/Currencies')
}

export function save(newRowData: User) {
    return axios
        .post('http://localhost:8080/customers', newRowData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
}

export function update(editedUser: User) {
    const editedData = {
        id: editedUser.ID,
        customer_name: editedUser.Customer_name,
        street: editedUser.Street,
        city: editedUser.City,
        state: editedUser.State,
        zip_code: editedUser.Zip_code,
        notes: editedUser.Notes,
        terms: editedUser.Terms,
        account_number: editedUser.Account_number,
        tax_id: editedUser.Tax_id,
        balance: editedUser.Balance,
        is_active: editedUser.Is_active,
        is_sub_agency: editedUser.Is_sub_agency,
        Language: editedUser.Language,
        slug: editedUser.Slug,
        id_currency: editedUser.Id_currency,
        id_country: editedUser.Id_country,
        irs_share_key: editedUser.Irs_share_key,
        currency_rate: editedUser.Currency_rate,
        agency: editedUser.Agency,
        avoid_deletion: editedUser.Avoid_deletion,
        is_editable: editedUser.Is_editable,
        alias: editedUser.Alias,
        already_used: editedUser.Already_used,
        ab_key: editedUser.Ab_key,
        tmc_client_number: editedUser.Tmc_client_number,
    };

    return axios
        .put(`http://localhost:8080/customer?id=${editedUser.ID}`, editedData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
}

export function deleteUser(customer: User) {
    return axios.delete(`http://localhost:8080/customer/${customer.ID}`);
}