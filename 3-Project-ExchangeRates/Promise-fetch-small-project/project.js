const amount = document.getElementById('amount');
const firstSelectItems = document.querySelectorAll('#menuFrom li');
const secondSelectItems = document.querySelectorAll('#menuTo li');
const convertButton = document.getElementById('convertButton');
const buttonFrom = document.getElementById('dropdownButtonFrom');
const buttonTo = document.getElementById('dropdownButtonTo');
const syncButton = document.getElementById('syncButton');


const currency = new Currency('USD','TRY');
const ui = new UI();

eventListeners();

function eventListeners(){
  convertButton.addEventListener('click',exchangeCurrency);

  firstSelectItems.forEach(function(item) {
    item.addEventListener("click", function() {
        const firstCurrency = item.textContent.trim(); 
        currency.changeFirstCurrency(firstCurrency);
        ui.changeFirst(item);
        ui.changeSymbolFrom(firstCurrency);
    });
  });

  secondSelectItems.forEach(function(item) {
    item.addEventListener("click", function() {
      const secondCurrency = item.textContent.trim(); 
      currency.changeSecondCurrency(secondCurrency);
      ui.changeSecond(item);
      ui.changeSymbolTo(secondCurrency);
    });
  });

  syncButton.addEventListener('click',changeDirection);
}

function exchangeCurrency(){
  currency.changeAmount(amount.value);
  currency.exchange()
  .then(result => {
      ui.displayResult(result);
  })
  .catch(err => console.log(err));
}

function changeDirection(){
  ui.changeDirection();
  currency.changeFirstCurrency(buttonFrom.textContent.trim());
  currency.changeSecondCurrency(buttonTo.textContent.trim());
  ui.changeSymbolFrom(buttonFrom.textContent.trim());
  ui.changeSymbolTo(buttonTo.textContent.trim());
}








