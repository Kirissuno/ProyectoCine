import { browser, element, by } from 'protractor';

export class LoginTest {
    navigateTo() {
        return browser.get("/login");
    }

    //login
    getCajaUsuario() {
        return element(by.id('usuario'));
    }
    
    getContraCaja() {
        return element(by.id('contrasena'));
    }

    getBotonLogin(){
        return element(by.buttonText("Iniciar Sesión"));
    }

    getBotonPanelControl(){
        return element(by.id('panel-control'))
    }

    getTextoBienvenida(){
        return element(by.css('h3'));
    }

    //Añadir película
    getBtnAnadir(){
        return element(by.buttonText('Añadir película'));
    }

    getInputTitulo(){
        return element(by.id('titulo'));
    }

    getInputDirector(){
        return element(by.id('director'));
    }

    getInputFecha(){
        return element(by.id('fecha'));
    }

    getBtnAnadirEnviar(){
        return element(by.buttonText('Añadir'));
    }

}