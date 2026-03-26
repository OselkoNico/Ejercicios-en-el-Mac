describe('Prueba de formulario', () => {
    it('Usuario envia formulario', () => {
        cy.visit('http://localhost:5500')
        cy.get('#nombre').type("Juan")
        cy.get('#email').type("juan@test.com")
        cy.get('#btnEnviar').click()

        cy.get('#mensaje')
            .should('contain', 'Formulario enviado correctamente')
    })
})