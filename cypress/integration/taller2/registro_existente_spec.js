describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
            //Lineas nuevas  
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Junior")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Portocarrero")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("prueba2@example.com")
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Ingeniería de Sistemas y Computación")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').find('input[name="acepta"]').click()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Ocurrió un error activando tu cuenta')
    })
})