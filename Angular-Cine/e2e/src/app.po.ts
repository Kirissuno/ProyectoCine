import { browser, by, element } from 'protractor';

export class AppPage {
  //index
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .card-body div h2')).getText() as Promise<string>;
  }
  //boton para ir a lista
  getListaFromIndex() {
    return element(by.id('listarLista'));
  }

  //contar TRs
  getCantidadElementosTabla() {
    return element.all(by.tagName('tr'));
  }

  //btn detalles
  getBtnDetalles() {
    return element.all(by.buttonText('Ver Detalles')).first();
  }

  getTituloDetalles() {
    return element(by.css('.card .card-body h2'));
  }

  //btn consultar director
  getBtnConsulta() {
    return element(by.id('consultar-director'));
  }

  //input conslultar director
  getInputConsulta(){
    return element(by.css("input"));
  }

  //btn enviar consulta
  getBtnEnviarConsulta(){
    return element(by.buttonText('Consultar'));
  }

  //get error no tiene pelis
  getNoTienePelis(){
    return element(by.className('text-danger'));
  }

  //get director buscado
  getBtnFinalizar(){
    return element(by.buttonText('Finalizar'));
  }
  getPrimerDirectorBuscado(){
    return element.all(by.tagName('li')).first();
  }

  primeroDeLaLista() {
    return element.all(by.tagName('table tr td')).first();
  }
}
