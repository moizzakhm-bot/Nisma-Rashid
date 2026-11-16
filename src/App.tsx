import React, { useState } from 'react';
import { BackgroundElements } from './components/BackgroundElements';
import { FloatingParticles } from './components/FloatingParticles';
import { CoverLandingPage } from './components/CoverLandingPage';
import { FormalInvitationCard } from './components/FormalInvitationCard';
import { NikahCeremony } from './components/NikahCeremony';
import { CountdownTimer } from './components/CountdownTimer';
import { VenueSection } from './components/VenueSection';
import { InvitationMessage } from './components/InvitationMessage';
import { FooterSection } from './components/FooterSection';
import { ArrowLeft } from 'lucide-react';

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpenInvitation = () => {
    setIsTransitioning(true);
    // Smooth, seamless crossfade directly into the invitation
    setTimeout(() => {
      setIsOpened(true);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 420);
  };

  const handleBackToCover = () => {
    setIsTransitioning(true);
    // Smooth, simple, and clean dissolve back to the cover page
    setTimeout(() => {
      setIsOpened(false);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 320);
  };

  return (
    <div className="min-h-screen emerald-bg-theme text-frost relative selection:bg-emerald-700/40 selection:text-white overflow-x-hidden">
      {/* Background Architectural Islamic Arches, Lighting & Stars */}
      <BackgroundElements />

      {/* Ambient Floating Starlight / Dust Particles */}
      <FloatingParticles />

      {/* Main Container */}
      <main className="relative z-10 flex flex-col items-center w-full min-h-screen">
        {!isOpened ? (
          /* State 1: ONLY The First Page / Cover Landing Page */
          <div
            className={`w-full flex flex-col items-center transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
              isTransitioning
                ? 'opacity-0 -translate-y-3 scale-[0.99] pointer-events-none'
                : 'opacity-100 translate-y-0 scale-100'
            }`}
          >
            <CoverLandingPage
              onOpenInvitation={handleOpenInvitation}
              isOpening={isTransitioning}
            />
          </div>
        ) : (
          /* State 2: Full Invitation Details Unfolded (Smooth, Simple, Seamless) */
          <div
            className={`w-full flex flex-col items-center py-6 sm:py-10 transition-all duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
              isTransitioning
                ? 'opacity-0 translate-y-3 scale-[0.99] pointer-events-none'
                : 'opacity-100 translate-y-0 scale-100 animate-seamless'
            }`}
          >
            {/* Top Navigation: Return to Cover Option */}
            <div className="w-full max-w-3xl px-4 sm:px-6 mb-4 flex justify-start animate-card-1">
              <button
                onClick={handleBackToCover}
                className="shining-translucent-box dark-emerald-box relative inline-flex items-center space-x-2 text-xs font-sans tracking-widest text-frost-muted hover:text-frost-bright transition-colors py-2 px-3.5 rounded-xl cursor-pointer"
                aria-label="Return to cover page"
              >
                <div className="absolute inset-1 rounded-lg border border-frost/20 pointer-events-none" />
                <ArrowLeft className="w-3.5 h-3.5 text-frost relative z-10" />
                <span className="relative z-10">COVER PAGE</span>
              </button>
            </div>

            {/* Card 1: Formal Invitation & Couple Details (Unified Single Box) */}
            <div className="w-full animate-card-1">
              <FormalInvitationCard />
            </div>

            {/* Card 2: The Nikah Ceremony (With Time, Venue, and Lunch in side-by-side small boxes) */}
            <div className="w-full animate-card-2">
              <NikahCeremony />
            </div>

            {/* Card 3: Live Wedding Countdown Timer */}
            <div className="w-full animate-card-3">
              <CountdownTimer />
            </div>

            {/* Card 4: Venue & Google Maps Directions Card */}
            <div className="w-full animate-card-4">
              <VenueSection />
            </div>

            {/* Card 5: Warm Invitation Message */}
            <div className="w-full animate-card-5">
              <InvitationMessage />
            </div>

            {/* Residence & Contact Details (Footer) */}
            <div className="w-full animate-card-5">
              <FooterSection />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
