
const calculateVerificationNumber = (n) => {
    let aux = parseInt(n); // primero lo convierto a numero
    let acc = 0; // y ademas me creo una variable acumulador, para tener el resultado intermedio
    while (aux > 9) { // despues, la condicion es que el numero resultado, sea de un solo digito, asi que me fijo que el numero no sea mayor a 9
      acc = 0; // y si es asi, hago una simplificacion, sumando cada digito
      while (aux > 0) { // vuelvo a 0, la variable aux
        acc += aux % 10; // y en cada paso hago %10 para quedarme con el ultimo numero
        aux = Math.floor(aux / 10); // y dividido 10, para sacarselo
      }
      aux = acc;
    }
    return console.log(aux);
};

calculateVerificationNumber(4564);