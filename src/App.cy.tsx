import App from './App';

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })
  it('validate text in app component', () => {
    cy.mount(<App />);
    cy.get('p').should('contains.text', 'React with cypress unit testing')
  })
})