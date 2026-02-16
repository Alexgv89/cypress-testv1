import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";
import { Status } from "allure-js-commons";
import * as os from "node:os";
import cypressOnFix from "cypress-on-fix";

export default defineConfig({
  retries: {
    runMode: 2,    // Reintenta hasta 2 veces en GitHub Actions
    openMode: 0     // No reintenta mientras usted está desarrollando localmente
  },
  video: true,               // Graba video de la ejecución completa
  screenshotOnRunFailure: true, // Captura imagen exacta al fallar
  trashAssetsBeforeRuns: true,  // Limpia evidencias viejas

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,
    showSkipped: true,
    charts: true,
    reportTitle: 'QA Report',
    reportPageTitle: 'Reporte de Pruebas',
    reportFilename: 'index',
    timestamp: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    json: false,

  },
  e2e: {
    setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      allureCypress(on, config, {
        resultsDir: "allure-results",

        environmentInfo: {
          os_platform: os.platform(),
          node_version: process.version,
          Responsable: "Señor alex gv",
          Proyecto: "QA Report1",
          Entorno: "Staging"
        },
      });
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
