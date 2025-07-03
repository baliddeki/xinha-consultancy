
import React, { useState } from 'react';
import { Navigation, Footer } from './components/layout';
import { HomePage, BusinessesPage, EventsPage } from './pages';
import { PageType } from './types/navigation';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'businesses':
        return <BusinessesPage />;
      case 'events':
        return <EventsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;