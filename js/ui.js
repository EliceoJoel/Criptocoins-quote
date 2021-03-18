class UI {
   constructor(){
      this.init();
   }

   init(){
      this.buildSelect();
   }

   buildSelect(){
      Api.getCoinsAPI()
         .then(coins => {
            const select = document.getElementById('criptocoin');
            //iterate in results of API
            for(const [key, value] of Object.entries(coins.Data)){
               const option = document.createElement('option');
               option.value = value.Symbol;
               option.textContent = value.CoinName;
               select.appendChild(option);
            }
         })
   }

   showInfoResultOfCriptoCoin(result, criptocoin, coin){

      //remove previuos results
      const previous  =  document.querySelector('.result > div');
      if(previous){
         previous.remove();
      }
      const resultInfo = result[criptocoin][coin];

      //rounded price's digits
      let price = resultInfo.PRICE.toFixed(2);
      //percentaje variation
      let percentaje = resultInfo.CHANGEPCTDAY.toFixed(2);
      //last Update
      let lastUpdate = new Date(resultInfo.LASTUPDATE * 1000).toLocaleDateString('es-BO');
      //build template
      let html = `<div class="result-content success">
                  <h2>Result:</h2>
                  <p>The price of ${resultInfo.FROMSYMBOL} in ${resultInfo.TOSYMBOL} coin is ${price}</p>
                  <p>The last variation: % ${percentaje}</p>
                  <p>Last update: ${lastUpdate}</p>
                  </div>`;
      //show spinner
      this.showHideSpinner('block');
      setTimeout(() => {
         this.showHideSpinner('none');
         //inner the result
         document.querySelector(".result").innerHTML = html;
      }, 3000);
   }

   showHideSpinner(display){
      const spinner = document.querySelector(".loader");
      spinner.style.display = display;
   }
}
