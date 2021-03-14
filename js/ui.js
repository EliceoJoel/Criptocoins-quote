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
}
