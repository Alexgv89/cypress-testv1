/// <reference types="cypress" />
import '@cypress/xpath';
describe('test de inicio ', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  // Esto evita que el test falle por el error de Waypoint
  if (err.message.includes('Waypoint is not defined')) {
    return false;
  }
  // Deje que otros errores sigan fallando la prueba por seguridad
});
    it('prueba1', () => {
        cy.visit('https://ultimateqa.com/automation');
        cy.title().should('eq', 'Automation Practice - Ultimate QA');
        cy.get('a').contains('Big page with many elements').click()
        cy.get('#Skills_Improved').should('be.visible').and('have.text', 'Skills Improved:');

    });
});

