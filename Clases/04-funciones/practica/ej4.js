function esMayor(edad) {
    return edad >= 18
 }
if (esMayor(20)) {
    console.log("Es mayor de edad y tiene 20")
} else {
    console.log("Es menor de edad")
}
 console.log(esMayor(20)) // true
 console.log(esMayor(15)) // false