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
  video: true,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  trashAssetsBeforeRuns: true,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporte de Pruebas',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on = cypressOnFix(on);

      // 1. Cargar Allure PRIMERO (para que procese sus cosas)
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

      // 2. Cargar Mochawesome AL FINAL (para que tenga la última palabra en el reporte HTML)
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
