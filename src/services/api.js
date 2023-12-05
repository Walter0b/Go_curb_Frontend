const url = 'https://go-curb.onrender.com/'

export async function getInvoices() {
    return (await fetch(`${url}invoices`)).json()
}

export async function getPayments() {
    return (await fetch(`${url}payments`)).json();
}

export async function getTravelItems() {
    return (await fetch(`${url}airbooking`)).json();
}

export async function getCustomers() {
    return (await fetch(`${url}customers`)).json();
}

export async function getImputations() {
    return (await fetch(`${url}imputations`)).json();
}

export async function getSingleCustomerInfo(id, associatedItem) {
    return (await fetch(`${url}customers?embed=${associatedItem}&id=${id}`)).json();
}

export async function postPayment(payment) {
    return (await fetch(`${url}payments`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payment)
    })).json();
}

export async function postInvoice(invoice) {
    return (await fetch(`${url}invoices`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
    })).json();
}
export async function postImputations(imputations) {
    return (await fetch(`${url}imputations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(imputations)
    })).json();
}