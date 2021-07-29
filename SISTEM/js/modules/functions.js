export const transformMonth = fecha => {
    let month = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    let aux = new Date(fecha)
    return (month[aux.getUTCMonth()])
}

export const calculateBalance = (data) =>{
    let i = 0
    let balance = 0

    while (data[i]){
        if(data[i].type_operation == 'ingreso')
            balance += data[i].amount
        else
            balance -= data[i].amount
        i++
    }

    return balance.toFixed(2)
}

export const renderBalance = (data) =>{
    const balance = document.querySelector('#balance-number')
    const calcBalance = calculateBalance(data)

    balance.innerHTML = '$' + calcBalance

    if(calcBalance < 0){
        balance.classList.add('egress-color')
    }
}

export const renderOperation = (data) =>{
    
    const main = document.querySelector('.operations-container')
    let amountHTML = ''

    let day = new Date(data.date)
    main.innerHTML +=
        `<div class="operation flex-row" id=${data.id_operation}>
                <div class="flex-row inner-container-operation">
                    <div class="flex-column text-align-center">
                        <span class="month-operation">${transformMonth(data.date)}</span>
                        <span class="day-operation">${day.getDate()}</span>
                    </div>
                    
                    <span class="concept">
                        ${data.concept}
                    </span>
                </div>

                <span class="amount-operation operationId${data.id_operation}">
                    $${data.amount}
                </span>
                <img class='delete-img-show' src="../img/delete.svg">
            </div>
        `

    amountHTML = document.querySelector(`.operationId${data.id_operation}`)
    if(data.type_operation == 'ingreso')
        amountHTML.classList.add('entry-color')
    else
        amountHTML.classList.add('egress-color')

}