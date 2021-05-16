/// <reference types="cypress" />
import BasePage from "../page_objects/BasePage"

const basePage = new BasePage

describe("Check24 Demo App Automation ", () => {
        before(() => {
            basePage.openURL();
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
            });
            basePage.verifyContent()
        })

        it("Executing Test Automation Suit ", () => {
            cy.fixture('example').then(data => {
                basePage.SearchComparison(data.positiveValue)
            })
            basePage.SortAndFilter()
            basePage.verifyParametes();         
        })
    })