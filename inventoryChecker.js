// importar a função que checa o estoque
const { checkInventory } = require("./lib/libraryInventory.js");
// array de pedidos, objeto e quantidade
const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

// função que lida com o sucesso
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
// função que lida com a falha
const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};
/* chamada da promessa e de fluxo, sem o método .then() a primise não é executada.
A separação de interesses significa organizar o código em seções distintas, 
cada uma lidando com uma tarefa específica. Ele nos permite navegar rapidamente 
em nosso código e saber onde procurar se algo não estiver funcionando.
*/
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);
