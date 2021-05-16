//// <reference types="cypress" />
// import 'cypress-waitfor';

const url = 'https://kredit.check24.de/vergleich';

export default class BasePage {
  constructor() {
  }

  getCookieBox(){
    return cy.get('.c24-cookie-consent-notice')
  }
  getAcceptCookie(){
    return cy.get('.c24-cookie-consent-button').contains('Akzeptieren')
  }
  getLogo() {
    return cy.get('.c24-logo');
  }
  getDefaultProduct(){
    return cy.get('#product_id_432')
  }
  getResultProduct(){
    return cy.get('#product_id_331')
  }
  getSearch(){
    return cy.get('.c24-search-icon');
  }
  getContent() {
    return cy.get('app-results.ng-star-inserted');
  }
  getMoneyInput() {
    return cy.get('.howMuch > input');
  }
  getDurationInput() {
    return cy.get('#duration')
  }
  get12DurationInput() {
    return cy.contains('12 Monate')
  }
  get180DurationInput() {
    return cy.contains('180 Monate')
  }
  getPurposeInput() {
    return cy.get('#purpose')
  }
  getPurpose() {
    return cy.contains(' PC/Audio/Video ')
  }
  getFilterOption() {
    return cy.get('.openFilter')
  }
  getFilterBox(){
    return cy.get(':nth-child(1) > .checkbox')
  }
  getSortingOption() {
    return cy.get('.openSort')
  }
  getSorted(){
    return cy.get(':nth-child(5) > div.ng-tns-c27-1 > .ng-tns-c27-1')
  }
  getSearchResultTab() {
    return cy.get('.tabName')
  }
  getLocationTab() {
    return cy.get('.location')
  }
  getProduct(){
    return cy.get('#product_id_331 > .bank > .bankLogo')
  }

paramaterUpdaterAlert(){
  return cy.get('.blueBar > .ng-star-inserted')
}

  openURL() {
    cy.visit(url);
  }
  verifyContent() {
    cy.clearCookies();
    cy.clearLocalStorage();
    this.getCookieBox().should('be.visible');
    this.getAcceptCookie().should('be.visible');
    this.getAcceptCookie().click()
    this.getLogo().should('be.visible');
    this.getSearch().should('be.visible');
    this.getContent().should('be.visible');
  }

  SearchComparison(data) {
    this.getMoneyInput().should('be.visible');
    this.getMoneyInput().type(data);
    this.getDurationInput().should('be.visible');
    this.getDurationInput().click();
    this.get12DurationInput().click()
    this.getPurposeInput().should('be.visible');
    this.getPurposeInput().click()
    this.getPurpose().click();
    this.getPurpose().click();

  }


  NullMoney(data){
    this.getMoneyInput().should('be.visible');
    this.getMoneyInput().type(data);
    this.paramaterUpdaterAlert().should('be.visible');
  }
  
  UnavailableDuration(){
    this.getDurationInput().should('be.visible');
    this.getDurationInput().click();
    this.get180DurationInput().click();
    this.paramaterUpdaterAlert().should('be.visible');
 
  }
  SortAndFilter(){
    cy.wait(1000)
    this.getFilterOption().should('be.visible');
    this.getFilterOption().click();
    this.getFilterBox().click();
    this.getSortingOption().click();
    this.getSorted().click();
    this.getSearchResultTab().scrollIntoView()
    this.getSearchResultTab().should('be.visible');
    this.getResultProduct().should('be.visible');
    cy.wait(1000)
    this.getResultProduct().scrollIntoView();
    cy.wait(2000)
    // this.getContent().first();
    this.getResultProduct().click();

  }

  verifyParametes(){
    this.getDurationInput().contains ('12 Monate')
    this.getPurposeInput().contains(' PC/Audio/Video ')
  }

}

