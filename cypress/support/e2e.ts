// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// 2. Soporte para XPath (si lo sigue usando)
import '@cypress/xpath';

// 3. Registro de Mochawesome
import 'cypress-mochawesome-reporter/register';

// 4. IMPORTANTE: Allure requiere este entry point específico para recolectar datos
import "allure-cypress";

// 5. Ignorar errores no capturados de la aplicación (como el error de jQuery)
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});