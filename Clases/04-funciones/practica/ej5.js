function estaEnRango (numero, maximo) {
    const algo = 5;
    return numero >= 1 && numero <= maximo;
}
console.log(estaEnRango(5, 10)) // true
console.log(estaEnRango(0, 10)) // false
console.log(estaEnRango(10, 10)) // true
console.log(estaEnRango(algo)) // ReferenceError: algo is not defined porque la variable algo esta definida dentro de la funcion y no se puede acceder desde afuera de la funcion