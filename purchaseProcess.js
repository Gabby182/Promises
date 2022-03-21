/*Um padrão comum que veremos com a programação assíncrona 
são várias operações que dependem umas das outras para serem 
executadas ou que devem ser executadas em uma determinada ordem.
Esse processo de encadeamento de promessas é chamado de composição . 
As promessas são projetadas com a composição em mente! 
 */
const {checkInventory, processPayment, shipOrder} = require('./lib/libraryPurchase.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);  
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
