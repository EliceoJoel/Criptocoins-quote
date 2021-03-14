const Api = new API('bab815cb602801c1107ac34938ce706d34058f6616e30b6cd0032a95aa2c5915');
Api.getCoinsAPI();

const ui = new UI();


//read the form 
const form = document.getElementById('form');
//check select coins
form.addEventListener('submit', (e) => {
   e.preventDefault();
   
});