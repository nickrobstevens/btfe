describe('App loads', () => {

  it('Shows the landing page', () => {
    cy.visit('/')
    cy.contains('Landing!')
  })


  it('Has a list of people', () => {
    cy.visit('/')
    cy.get('header li').should('have.length', 10)
  })


  it('Loads a user who exists', () => {
    cy.visit('/')
    cy.get('header a').first().click()
    cy.contains('Posts from Leanne Graham:')
  })

  it('Loads a users posts', () => {
    cy.visit('/')
    cy.get('header a').first().click()
    cy.get('.user-post').should('have.length.at.least', 1)
  })

  it('Loads all user posts', () => {
    cy.visit('/')
    cy.get('header a').first().click()
    cy.get('.user-actions .btn').click();
    cy.get('.user-post').should('have.length.above', 3)
  })

  it('Can expand comments on a post', () => {
    cy.visit('/')
    cy.get('header a').first().click()
    cy.get('.user-post .btn').first().click();
    cy.get('.post-comment').should('have.length.at.least', 1)
  })

})
