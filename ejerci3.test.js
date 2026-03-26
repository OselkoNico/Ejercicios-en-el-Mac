const contarPalabras = require('./ejerci3');

test('Función de contar palabras', () => {
    const frase = "Hola     que hola  ";

    const contador = contarPalabras(frase)
    expect(contador).toEqual({Hola: 1, que: 1, hola: 1})
})