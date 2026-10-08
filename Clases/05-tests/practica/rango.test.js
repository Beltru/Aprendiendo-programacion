 import test from "node:test"
 import assert from "node:assert/strict"
 import {estaEnRango} from '../../../Asistente/funciones.js';


    test("El numero 1 esta en rango", () => {
        assert.equal(estaEnRango(1, 3), true)
    });

    test("El numero 3 esta en rango", () => {
        assert.equal(estaEnRango(3, 3), true)
    });

    test("El numero 0 no esta en rango", () => {
        assert.equal(estaEnRango(0, 3), false)
    });

    test("El numero 4 no esta en rango", () => {
        assert.equal(estaEnRango(4, 3), false)
    });

    test("El numero 1.5 tiene decimal y no se permite", () => {
        assert.equal(estaEnRango(1.5, 3), false)
    });
