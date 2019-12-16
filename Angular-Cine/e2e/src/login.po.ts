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

    getLogoutBtn(){
        return element(by.buttonText('Cerrar sesión'))
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

    //Modificar
    getModificarBtn(){
        return element.all(by.buttonText('Modificar')).first();
    }
    getActualizarBtn(){
        return element(by.buttonText('Actualizar'));
    }

    //Borrar
    getBorrarBtn(){
        return element.all(by.buttonText('Borrar')).first();
    }

}