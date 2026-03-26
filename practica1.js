describe('Comprar en una tienda', () => {
    it('Comprar pan', () => {
        cy.visit('http://www.ejemplo.com')
        cy.get('#tarea').type('Comprar pan')
        cy.contains('button', 'Añadir').click()
        cy.get('#lista').should('contain', 'Comprar pan')
    })
})