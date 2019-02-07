var assert = require('assert');

describe('registro estudiante', function() {
    it('should visit los estudiantes and failed at log in', function() {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('portocr@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('12345678');

        cajaLogIn.element('button=Ingresar').click()

        var findTeacher = browser.element('.Select-input').find('input[role="combobox"]');

        findTeacher.click();
        findTeacher.keys('Mario Linares').click();
    });
});