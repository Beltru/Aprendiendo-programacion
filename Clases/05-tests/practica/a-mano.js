import {estaEnRango} from '../../../Asistente/funciones.js';

export function testEstaEnRango(obtenido, esperado, mensajeok, mensajeerror, test) {
 if (obtenido === esperado) {
    console.log(`Test: ${test} - OK. ${mensajeok}`);
  } else {
    console.log(`Test: ${test} - ERROR. ${mensajeerror}`);
    
  }  } 

        testEstaEnRango(estaEnRango(1, 3), true, "1 está en el rango [1, 3]", "1 no está en el rango [1, 3]", "(1, 3)");
        testEstaEnRango(estaEnRango(3, 3), true, "3 está en el rango [1, 3]", "3 no está en el rango [1, 3]", "(3, 3)");
        testEstaEnRango(estaEnRango(0, 3), false, "0 no está en el rango [1, 3]", "0 no está en el rango [1, 3]", "(0, 3)");
        testEstaEnRango(estaEnRango(4, 3), false, "4 no está en el rango [1, 3]", "4 no está en el rango [1, 3]", "(4, 3)");
        testEstaEnRango(estaEnRango(1.5, 3), false, "1.5 no está en el rango [1, 3]", "1.5 no está en el rango [1, 3]", "(1.5, 3)");
