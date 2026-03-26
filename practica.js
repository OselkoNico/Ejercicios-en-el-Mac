describe('Prueba de formulario', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500')
    })
    it('Usuario envia formulario', () => {
        cy.get('#nombre').type("Juan")
        cy.get('#email').type("juan@test.com")
        cy.get('#btnEnviar').click()

        cy.get('#mensaje')
            .should('contain', 'Formulario enviado correctamente')
    })
    it('Usuario sin email, no envia formulario', () => {
        cy.get('#nombre').type("Juan")
        cy.get('#btnEnviar').click()
        cy.get('#mensaje')
            .should('contain', 'Email obligatorio')
    })
})