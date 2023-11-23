const reformatDate = (date) => {
    return new Date(date).toLocaleDateString().split('-').reverse().join('-')
}

const putCurrenToOriginalState = (currency) => {
     return currency.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

export {reformatDate, putCurrenToOriginalState}