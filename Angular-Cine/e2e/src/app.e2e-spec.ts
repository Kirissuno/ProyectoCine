import { AppPage } from './app.po';
import { LoginTest } from './login.po';
import { browser, logging, By } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginTest;

  var variables = {
    tamanoTablaDefecto: 0,
    tamanoTablaAnadir: 1,
    tamanoTablaAntesBorrar: 0,
    tamanoTablaDespuesBorrar: 0
  };

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
    expect(page.getCantidadElementosTabla()).toBeGreaterThanOrEqual(variables.tamanoTablaDefecto);
  });

  it('Ver detalles peli', () => {
    page.getBtnDetalles().click();
    expect(page.getTituloDetalles().getText()).toBe('Detalles de la película');
  })

  it('Consultar Director que TIENE pelis', () => {
    page.getBtnConsulta().click();
    page.getInputConsulta().sendKeys('Oktay');
    page.getBtnEnviarConsulta().click();
    expect(page.getCantidadElementosTabla()).toBeGreaterThan(variables.tamanoTablaDefecto);
  })

  it('Consultar Director que NO TIENE pelis', () => {
    page.getBtnConsulta().click();
    page.getInputConsulta().sendKeys('NDEAAH');
    page.getBtnEnviarConsulta().click();
    expect(page.getNoTienePelis().getText()).toBe('Este director no tiene películas');
  })

  it('Directores Buscados', () => {
    page.getBtnFinalizar().click();
    expect(page.getPrimerDirectorBuscado().getText()).toBe('Oktay');
  })

  it('Test de logeo', () => {
    login.navigateTo();
    login.getCajaUsuario().sendKeys('admin');
    login.getContraCaja().sendKeys('admin');
    login.getBotonLogin().click();
    login.getBotonPanelControl().click();
    expect(login.getTextoBienvenida().getText()).toBe('Buenas admin ¿Quieres cerrar sesión?')
  })

  it('Test de logout', () => {
    login.getLogoutBtn().click();
    expect(login.getCajaUsuario().isPresent())
  })

  it('Añadir peli', () => {
    login.navigateTo();
    login.getCajaUsuario().sendKeys('admin');
    login.getContraCaja().sendKeys('admin');
    login.getBotonLogin().click();
    login.getBtnAnadir().click();
    login.getInputTitulo().sendKeys('Juanmaso');
    login.getInputDirector().sendKeys('Juanma');
    login.getInputFecha().sendKeys('17/12/2019');
    login.getBtnAnadirEnviar().click();
    expect(page.getCantidadElementosTabla()).toBeGreaterThan(variables.tamanoTablaAnadir);
  })

  it('Editar peli de juanma', () => {
    login.getModificarBtn().click();
    login.getInputDirector().clear();
    login.getInputDirector().sendKeys('JuanmaE2E');
    login.getInputFecha().clear();
    login.getInputFecha().sendKeys('20/12/2019');
    login.getActualizarBtn().click();
    expect(page.getElementosTabla().all(By.css('td')).get(0).getText()).toBe('JuanmaE2E');
  })

  it('Borrar peli de juanma', async () => {
    variables.tamanoTablaAntesBorrar = await page.getCantidadElementosTabla();
    login.getBorrarBtn().click();
    variables.tamanoTablaDespuesBorrar = await page.getCantidadElementosTabla();
    expect(variables.tamanoTablaDespuesBorrar).toBeLessThan(variables.tamanoTablaAntesBorrar)
  })


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
