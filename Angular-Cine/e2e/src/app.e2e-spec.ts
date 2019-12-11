import { AppPage } from './app.po';
import { LoginTest } from './login.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginTest;

  beforeEach(() => {
    page = new AppPage();
    login = new LoginTest();
  });

  it('Index', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Soy la página principal');
  });

  it('Lista /filmografia', () => {
    page.navigateTo();
    page.getListaFromIndex().click();
    expect(page.getCantidadElementosTabla().count()).toBeGreaterThan(0);
  });

  it('Ver detalles peli', () => {
    page.getBtnDetalles().click();
    expect(page.getTituloDetalles().getText()).toBe('Detalles de la película');
  })

  it('Consultar Director que TIENE pelis', () => {
    page.getBtnConsulta().click();
    page.getInputConsulta().sendKeys('Ni idea');
    page.getBtnEnviarConsulta().click();
    expect(page.getCantidadElementosTabla().count()).toBeGreaterThan(1);
  })

  it('Consultar Director que NO TIENE pelis', () => {
    page.getBtnConsulta().click();
    page.getInputConsulta().sendKeys('NDEAAH');
    page.getBtnEnviarConsulta().click();
    expect(page.getNoTienePelis().getText()).toBe('Este director no tiene películas');
  })

  it('Directores Buscados', () => {
    page.getBtnFinalizar().click();
    expect(page.getPrimerDirectorBuscado().getText()).toBe('Ni idea');
  })

  it('Test de logeo', () => {
    login.navigateTo();
    login.getCajaUsuario().sendKeys('admin');
    login.getContraCaja().sendKeys('admin');
    login.getBotonLogin().click();
    login.getBotonPanelControl().click();
    expect(login.getTextoBienvenida().getText()).toBe('Buenas admin ¿Quieres cerrar sesión?')
  })

  it('Añadir peli', () => {
    let tamano;
    login.navigateTo();
    login.getCajaUsuario().sendKeys('admin');
    login.getContraCaja().sendKeys('admin');
    login.getBotonLogin().click();
    (page.getCantidadElementosTabla().count()).then((valor)=>{
      tamano = valor;
    })
    login.getBtnAnadir().click();
    login.getInputTitulo().sendKeys('Juanmaso');
    login.getInputDirector().sendKeys('Juanma');
    login.getInputFecha().sendKeys('17/12/2019');
    login.getBtnAnadirEnviar().click();
    expect(page.getCantidadElementosTabla().count()).toBeGreaterThan(tamano);
  })




  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
