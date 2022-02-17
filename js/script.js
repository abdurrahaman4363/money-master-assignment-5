document.getElementById('calculate').addEventListener('click', function(){
    const foodInput = document.getElementById('food-input');
    const foodValue = foodInput.value;
    
    

    const rentInput = document.getElementById('rent-input');
    const rentValue = rentInput.value;
    
    
    

    const clothesInput = document.getElementById('clothes-input');
    const clothesValue = clothesInput.value;
    
    
    const totalExpenses = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
    
    const getTotalExpenses = document.getElementById('total-expenses');
    
    const updateTotalExpenses = parseFloat(totalExpenses); 
    getTotalExpenses.innerText = updateTotalExpenses;
    



    const incomeInput = document.getElementById('income-input');
    let incomeValue = incomeInput.value;

    


    const getBalance = document.getElementById('balance');
    
    
    const updateBalanceValue = parseFloat(incomeValue) - parseFloat(updateTotalExpenses);
    
    getBalance.innerText = updateBalanceValue;
     


    
    


})


document.getElementById('save-btn').addEventListener('click', function(){
          
              // income section
            const incomeInput = document.getElementById('income-input');
            let SaveIncomeValue = incomeInput.value;
            // incomeInput.value= ""; 


            // balance section
            const saveBalance = document.getElementById('balance');
            const remainingSaveBalance = saveBalance.innerText;

            // percentage input section
           const getPetcentage = document.getElementById('percentage');
           const percentageValue = parseFloat(getPetcentage.value);
        //    getPetcentage.value = '';
           

        // saving amount section
            const getSavingAmount = document.getElementById('saving-amount');
            

            const updateSavingAmount = (parseFloat(SaveIncomeValue) * percentageValue) /100;
            getSavingAmount.innerText = parseFloat(updateSavingAmount);
            const savingAmountValue = getSavingAmount.innerText;





           // remaining balance section
            const remainingBalance = document.getElementById('remaining-balance');
            


            const updateRemaingingBalance =  parseFloat(remainingSaveBalance ) - parseFloat(savingAmountValue);
            
            remainingBalance.innerText = parseFloat(updateRemaingingBalance);
    
})