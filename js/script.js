document.getElementById('calculate').addEventListener('click', function(){
    const foodInput = document.getElementById('food-input');
    const foodValue = foodInput.value;
    foodInput.value= "";
    

    const rentInput = document.getElementById('rent-input');
    const rentValue = rentInput.value;
    rentInput.value= "";
    
    

    const clothesInput = document.getElementById('clothes-input');
    const clothesValue = clothesInput.value;
    clothesInput.value= "";
    
    const totalExpenses = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
    
    const getTotalExpenses = document.getElementById('total-expenses');
    const previousTotalExpenses = getTotalExpenses.innerText;
    const updateTotalExpenses = parseFloat(totalExpenses); // parseFloat(previousTotalExpenses) +
    getTotalExpenses.innerText = updateTotalExpenses;
    



    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    incomeInput.value= "";


    const getBalance = document.getElementById('balance');
    const previousBalance = getBalance.innerText;
    const newBalance = parseFloat(incomeValue) + parseFloat(previousBalance);
    const updateBalanceValue = parseFloat(incomeValue) - parseFloat(updateTotalExpenses);
    getBalance.innerText = updateBalanceValue;


    console.log(updateBalanceValue);
    


})