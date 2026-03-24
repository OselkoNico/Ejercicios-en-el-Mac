const crearSistemaReservas = require('./ejerci1')

test('reserva correctamente si hay sitio', () => {

    const sistema = crearSistemaReservas(10)

    sistema.reservar("Ana", 4)

    expect(sistema.disponibles()).toBe(6)

})