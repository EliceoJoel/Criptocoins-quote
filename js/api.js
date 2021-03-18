class API{
   constructor(apiKey) {
      this.apiKey = apiKey;
   }

   async getCoinsAPI(){
      const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
         const urlGetCoins = await fetch(url);
         const coins = await urlGetCoins.json();
         return coins;
   }

   async getInformationCripto(coin, criptocoin){
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}&api_key=${this.apiKey}`;

      //query to api
      const urlGetInfo = await fetch(url);
      const info = await urlGetInfo.json();
      return info;
   }
}