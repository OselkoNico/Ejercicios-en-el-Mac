const conIVA = require('./ejer4');

test('Función de sumar IVA', () =>{
    expect(conIVA([10, 20, 30])).toEqual([12.1, 24.2, 36.3])
});
test('Función sumar IVA vacío', () => {
    expect(conIVA([])).toEqual([])
});
test('Función sumar IVA mantiene el primer array', () => {
    const precioOriginal = [10, 20];
    expect(conIVA(precioOriginal)).toEqual([12.1, 24.2]);
    expect(precioOriginal).toEqual([10, 20]);
})