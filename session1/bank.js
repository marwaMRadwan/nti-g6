/*
customers =>  edit, delete, show all
add balance, show balance, withdraw
*/
const getCustomers = function(){
    customers = localStorage.getItem('customers') || '[]'
    return JSON.parse(customers)
}
const setCustomers = function(data){
    localStorage.setItem('customers', JSON.stringify(data))
}
getUserInput = function(msg){
    let data = prompt(msg)
    return data
}
addCustomer= function(){
    customer = {
        id: (new Date()).getTime(),
        name: getUserInput('please enter you name: '),
        balance: getUserInput('please enter your balance')
    }
    customers = getCustomers()
    customers.push(customer)
    setCustomers(customers)
}
