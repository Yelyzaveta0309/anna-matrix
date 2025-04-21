import ConsultationBlock from './components/ConsultationBlock/ConsultationBlock'
import ConsultHelp from './components/ConsultHelp/ConsultHelp'
import AuthorSection from './components/AuthorSection/AuthorSection';
import MatrixBlock from './components/MatrixBlock/MatrixBlock';
import ZonesSection from './components/ZonesSection/ZonesSection';
import PriceSection from './components/PriceSection/PriceSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import Footer from './components/Footer/Footer';
import FAQSection from './components/FAQSection/FAQSection';
import './styles/global.css';

function App() {
  return (
    <div>
      <ConsultationBlock />
      <ConsultHelp />
      <AuthorSection />
      <MatrixBlock />
      <ZonesSection />
      <PriceSection />
      <ReviewsSection />
      <FAQSection/>
      <Footer />
    </div>
  );
}

export default App;
