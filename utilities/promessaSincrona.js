/**For example, a database request may fulfill with the data 
 * from a query or reject with an error thrown. In this exercise, 
 * we’ll construct promises which resolve synchronously 
 * to more easily understand how they work. */

//object
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
// função executora
const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0){
      resolve('Sunglasses order processed.');
    }else{
      reject('That item is sold out.');
    }
}
  
//Promessa
const firstPromise = new Promise(myExecutor);
  
const orderSunglasses = () =>{
    return firstPromise;
};
  
// chamado da promessa por meio do retorno do método pedido
const orderPromise = orderSunglasses();
  
console.log(orderSunglasses());