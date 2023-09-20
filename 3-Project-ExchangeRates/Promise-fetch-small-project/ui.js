class UI{
  displayResult(result){
    document.getElementById('result').innerHTML = result.toFixed(3);
  }
  changeFirst(item){
    const selectedText = item.innerHTML;
    buttonFrom.innerHTML = selectedText;
  }
  changeSecond(item){
    const selectedText = item.innerHTML;
    buttonTo.innerHTML = selectedText;
  }
  changeDirection(){
    const contentButtonFrom = buttonFrom.innerHTML;
    const contentButtonTo= buttonTo.innerHTML;
    buttonFrom.innerHTML = contentButtonTo;
    buttonTo.innerHTML = contentButtonFrom;
  }
  changeSymbolFrom(firstCurrency){
    fetch('currency_symbols.json')
    .then(response => response.json())
    .then(data => {
      const fromCurrencySymbol = document.getElementById('fromCurrencySymbol');
      const selectedSymbolFrom = data[0][firstCurrency];
      fromCurrencySymbol.textContent = selectedSymbolFrom;
    })
    .catch(err => console.log(err));
  }
  changeSymbolTo(secondCurrency){
    fetch('currency_symbols.json')
    .then(response => response.json())
    .then(data => {
      const symbolTo = document.getElementById('symbol');
      const selectedSymbolTo = data[0][secondCurrency];
      symbolTo.textContent = selectedSymbolTo ;
    })
    .catch(err => console.log(err));
  }
}