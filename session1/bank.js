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
const createNewElement = function(parent, tagName, text=null){
    element = document.createElement(tagName)
    if(text) element.innerText = text
    parent.appendChild(element)
    return element
}
const showCustomers= function(){
    customers = getCustomers()
    tableBody = document.querySelector('#customersTable')
    tableHeads = ['id','name', 'balance']
    customers.forEach(customer => {
        tr = createNewElement(tableBody, 'tr')
        tableHeads.forEach(head=>{
            createNewElement(tr, 'td', customer[head])
        })
    });
}
showCustomers()