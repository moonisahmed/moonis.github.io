import { Navbar, Hero, About, Work, Contact, Footer } from './components';
import portfolioData from './data/portfolio.json';
import type { PortfolioData } from './types/portfolio';

const data = portfolioData as PortfolioData;

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar name={data.personal.name} />
      <main id="main-content" className="main" role="main">
        <Hero personal={data.personal} contact={data.contact} />
        <About about={data.about} skills={data.skills} />
        <Work work={data.work} />
        <Contact contact={data.contact} location={data.personal.location} />
      </main>
      <Footer name={data.personal.name} />
    </>
  );
}

export default App;
