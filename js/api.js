class API{
   constructor(apiKey) {
      this.apiKey = apiKey;
   }

   async getCoinsAPI () {
      const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

      const urlGetCoins = await fetch(url);
      const coins = await urlGetCoins.json();
      return coins;
   }
}