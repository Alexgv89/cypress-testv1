/// <reference types="cypress" />
import '@cypress/xpath';
import * as allure from "allure-cypress";
import { Severity } from 'allure-cypress';
describe('test de inicio ', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Esto evita que el test falle por el error de Waypoint
    if (err.message.includes('Waypoint is not defined')) {
      return false;
    }
    // Deje que otros errores sigan fallando la prueba por seguridad
  });
  it('prueba1 @allure.id:1', () => {
    allure.owner('alex')
    allure.parameter('Environment', 'Stagingtest')
    allure.parameter("time", new Date().toLocaleString("es-SV", { timeZone: "America/El_Salvador", hour12: false }), { excluded: true });
    allure.severity(Severity.CRITICAL);
    allure.tag('Staging777')
    allure.label('environment', 'Stagingsys');
    allure.epic('flujo venta')
    allure.feature('venta pos')
    allure.story('hrm2')
    allure.link('https://ultimateqa.com/automation', 'Ultimate QA');
    allure.testCaseId('123456789')
    allure.description('prueba1 descripcion del test ')
    allure.issue('rgb-234') //BUGS TICKET
    allure.tms('rg-23') //TMS TICKET donde esta el plan de pruebas  jira ejemplo tarea
    cy.visit('https://ultimateqa.com/automation');
    cy.title().should('eq', 'Automation Practice - Ultimate QA');
    cy.get('a').contains('Big page with many elements').click()
    cy.get('#Skills_Improved').should('be.visible').and('have.text', 'Skills Improved');
  });

  it('prueba2 @allure.id:2', () => {
    allure.owner('alex2')
    allure.parameter('Environment', 'Stagingtest')//datos quese necesiten 
    allure.parameter("time", new Date().toLocaleString("es-SV", { timeZone: "America/El_Salvador", hour12: false }), { excluded: true });
    allure.severity(Severity.NORMAL)
    allure.tag('Staging777')
    allure.label('environment', 'Stagingsys');
    allure.epic('flujo venta')
    allure.feature('venta pos')
    allure.story('hrm2')

    cy.visit('https://ultimateqa.com/automation');
    cy.title().should('eq', 'Automation Practice - Ultimate QA');

  });
});

