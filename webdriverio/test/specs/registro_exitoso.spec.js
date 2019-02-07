var assert = require('assert');

describe('registro estudiante', function() {
    it('should visit los estudiantes and failed at log in', function() {

        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');
        var nombreInput = cajaSignUp.element('input[name="nombre"]');
        var apellidoInput = cajaSignUp.element('input[name="apellido"]');
        var correoInput = cajaSignUp.element('input[name="correo"]');
        var passwordInput = cajaSignUp.element('input[name="password"]');

        nombreInput.click();
        nombreInput.keys('Reinaldo');

        apellidoInput.click();
        apellidoInput.keys('Portocarrero');

        correoInput.click();
        correoInput.keys('portocr@example.com');

        cajaSignUp.element('select[name="idPrograma"]').selectByIndex(12);

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        passwordInput.click();
        passwordInput.keys('12345678');

        cajaSignUp.element('input[name="acepta"]').click();

        cajaSignUp.element('button=Registrarse').click()


        var alertText = browser.element('.sweet-alert').getText();
        expect(alertText).toContain('Registro exitoso!');
    });
});