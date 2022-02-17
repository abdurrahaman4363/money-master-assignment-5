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
    
})