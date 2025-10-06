import { LandingSection } from './components/LandingSection';
import { TimelineSection } from './components/TimelineSection';
import { PrescriptionSection } from './components/PrescriptionSection';
import { MiniGame } from './components/MiniGame';
import { GallerySection } from './components/GallerySection';
import { SurpriseSection } from './components/SurpriseSection';

function App() {
  return (
    <div className="min-h-screen">
      <LandingSection />
      <TimelineSection />
      <PrescriptionSection />
      <MiniGame />
      <GallerySection />
      <SurpriseSection />
    </div>
  );
}

export default App;
