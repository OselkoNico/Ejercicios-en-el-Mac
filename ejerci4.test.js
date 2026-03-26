const validarPassword = require('./ejerci4');

test('Funcion de validacion de contraseñas', () => {
    expect(validarPassword("Hola1234")).toBe(true);
    expect(validarPassword("Holaaaaa")).toBe(false);
    expect(validarPassword("hola1234")).toBe(false);
    expect(validarPassword("Ho12")).toBe(false);
});