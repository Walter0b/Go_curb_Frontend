const url = 'https://go-curb.onrender.com/'

async function getInvoices() {
    return (await fetch(`${url}invoices?embed=customer`)).json()
}

async function getPayments() {
    return (await fetch(`${url}payments`)).json();
}

async function getTravelItems() {
    return (await fetch(`${url}airbooking`)).json();
}

async function getCustomers() {
    return (await fetch(`${url}customers`)).json();
}

export { getInvoices, getTravelItems, getPayments, getCustomers }