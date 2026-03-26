describe('Ejercicio de añadir varias tareas', () => {
    it('Comprar pan y leche', () => {
        cy.visit('http://www.ejemplo.com')

        cy.get('#tarea').type('Comprar pan')
        cy.contains('button', 'Añadir').click()

        cy.get('#tarea').type('Comprar leche')
        cy.contains('button', 'Añadir').click()

        cy.get('#lista').should('contain', 'Comprar pan')
        cy.get('#lista').should('contain', 'Comprar leche')

        cy.get('#tarea').should('have.value', '')
    })
})