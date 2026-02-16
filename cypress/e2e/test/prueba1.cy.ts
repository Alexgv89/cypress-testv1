/// <reference types="cypress" />
import '@cypress/xpath';
import * as allure from "allure-cypress";
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
    allure.severity('critical')
    allure.tag('Staging777')
    allure.label('environment', 'Stagingsys');
    allure.epic('flujo venta')
    allure.feature('venta pos')
    allure.story('hrm2')
    
    cy.visit('https://ultimateqa.com/automation');
    cy.title().should('eq', 'Automation Practice - Ultimate QA');
    cy.get('a').contains('Big page with many elements').click()
    cy.get('#Skills_Improved').should('be.visible').and('have.text', 'Skills Improved');

  });

  it('prueba2 @allure.id:2', () => {
    allure.owner('alex2')
    allure.severity('normal')
    allure.tag('Staging777')
    allure.label('environment', 'Stagingsys');

    cy.visit('https://ultimateqa.com/automation');
    cy.title().should('eq', 'Automation Practice - Ultimate QA');

  });
});

