const sumaSegura = require('../ejer3');

test('Función de suma correcta', () => {
        expect(sumaSegura(2, 5)).toBe(7);
});
test('Función de suma con primer dígito erróneo', () => {
    expect(() => sumaSegura("2", 5)).toThrow("Deben ser números")
});
test('Función de suma con segundo dígito erróneo', () => {
    expect(() => sumaSegura(2, "5")).toThrow("Deben ser números")
});