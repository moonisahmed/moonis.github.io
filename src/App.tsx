import { Navbar, Hero, About, Work, Contact, Footer, ErrorBoundary } from './components';
import portfolioData from './data/portfolio.json';
import { validatePortfolioData } from './types/portfolio';

// Validate data at build time
if (!validatePortfolioData(portfolioData)) {
  throw new Error('Invalid portfolio data structure');
}

const data = portfolioData;

function App() {
  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar name={data.personal.name} />
      <main id="main-content" className="main">
        <Hero personal={data.personal} contact={data.contact} />
        <About about={data.about} skills={data.skills} />
        <Work work={data.work} />
        <Contact contact={data.contact} location={data.personal.location} />
      </main>
      <Footer name={data.personal.name} />
    </ErrorBoundary>
  );
}

export default App;
