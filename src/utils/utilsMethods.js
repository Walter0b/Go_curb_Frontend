const reformatDate = (date) => {
    return new Date(date).toLocaleDateString().split('-').reverse().join('-')
}

const putDateToDBReady = (date) => {
    return date.split('-').reverse().join('-')
}

const putCurrencyToOriginalState = (currency) => {
     return currency.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

export {reformatDate, putDateToDBReady, putCurrencyToOriginalState}