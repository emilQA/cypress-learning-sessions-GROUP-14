/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
  it("children() to get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain' , 'Contact Us')
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get('.traversal-badge').closest('div').should('have.class', 'thumbnail') 
    // it looking for elemets that are above the our selected element
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get(".traversal-drinks-list > * ").eq('2').should('contain' , 'Milk')
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get('.btn-group-toggle > *').filter('.active').should('contain' , 'Button-1')
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get('.traversal-pagination').find('li').find('a').should('have.length' , 7)
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get('.traversal-table > tbody > tr > td').first().should('contain' , 'Andy')
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr > td').last().should('contain' , 'Scott')
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length' , 3)
  });

  it.only("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('#coffee').nextUntil('#espresso')
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get()
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get()
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get()
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    cy.get()
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get()
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get()
  });

  it("siblings() To get all sibling DOM elements of elements", () => {
    cy.get()
  });
});