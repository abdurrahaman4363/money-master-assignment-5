// function declaration
function getAllExpenses(expense){
    const expenseInput = document.getElementById(expense+'-input');
      

      if(expenseInput.value<0 || typeof(parseFloat( expenseInput.value)) == 'string' ){
          const error = document.getElementById('number-error');
          error.style.display = 'block';

          const  rightNumber= document.getElementById('number-right');
          rightNumber.style.display = 'none';

      }
      else{

        const error = document.getElementById('number-error');
        error.style.display = 'none';

        const  rightNumber= document.getElementById('number-right');
        rightNumber.style.display = 'block';

        return expenseInput;
      }
}

document.getElementById('calculate').addEventListener('click', function(){
    // get input value 
    const foodValue = getAllExpenses('food').value;
    const rentValue = getAllExpenses('rent').value;
    const clothesValue = getAllExpenses('clothes').value;
     const incomeValue = getAllExpenses('income').value;
    
    // expense total calculate
    const totalExpenses = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
    const getTotalExpenses = getAllExpenses('total-expenses');
    const updateTotalExpenses = parseFloat(totalExpenses); 
    getTotalExpenses.innerText = updateTotalExpenses;

     if(parseFloat(incomeValue) < parseFloat(updateTotalExpenses)){
      const error = document.getElementById('number-error');
      error.style.display = 'block';

      const  rightNumber= document.getElementById('number-right');
      rightNumber.style.display = 'none';
     }

     else{

      const error = document.getElementById('number-error');
      error.style.display = 'none';

      const  rightNumber= document.getElementById('number-right');
      rightNumber.style.display = 'block';

         // balance calculation
      const getBalance = getAllExpenses('balance');
      const updateBalanceValue = parseFloat(incomeValue) - parseFloat(updateTotalExpenses);
      getBalance.innerText = updateBalanceValue;
     }


    
     
})


document.getElementById('save-btn').addEventListener('click', function(){
          
              // income section
            let SaveIncomeValue = getAllExpenses('income').value;
            const remainingSaveBalance = getAllExpenses('balance').innerText;
            // percentage input section
           const percentageValue = parseFloat(getAllExpenses('percentage').value);
        // saving amount section
            const getSavingAmount = getAllExpenses('saving-amount');
            const updateSavingAmount = (parseFloat(SaveIncomeValue) * percentageValue) /100;
            getSavingAmount.innerText = parseFloat(updateSavingAmount);
            const savingAmountValue = getSavingAmount.innerText;

             if( parseFloat(remainingSaveBalance ) < parseFloat(savingAmountValue)){
              const error = document.getElementById('number-error');
              error.style.display = 'block';
        
              const  rightNumber= document.getElementById('number-right');
              rightNumber.style.display = 'none';
             }
             else{
              const error = document.getElementById('number-error');
              error.style.display = 'none';
        
              const  rightNumber= document.getElementById('number-right');
              rightNumber.style.display = 'block';

              
           // remaining balance section
            const remainingBalance = getAllExpenses('remaining-balance');
            const updateRemaingingBalance =  parseFloat(remainingSaveBalance ) - parseFloat(savingAmountValue);
            remainingBalance.innerText = parseFloat(updateRemaingingBalance);
             }


})