import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { CSRDetailsPage } from './components/pages/CSRDetailsPage';
import { VideosPage } from './components/pages/VideosPage';
import { OnlineFormPage } from './components/pages/OnlineFormPage';
import { OfflinePage } from './components/pages/OfflinePage';
import { VerifyPage } from './components/pages/VerifyPage';

type PageType = 'details' | 'videos' | 'online' | 'offline' | 'verify';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('details');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved page from localStorage
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage') as PageType;
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  // Save current page to localStorage
  const handlePageChange = (page: string) => {
    const newPage = page as PageType;
    setCurrentPage(newPage);
    localStorage.setItem('currentPage', newPage);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'details':
        return <CSRDetailsPage />;
      case 'videos':
        return <VideosPage />;
      case 'online':
        return <OnlineFormPage />;
      case 'offline':
        return <OfflinePage />;
      case 'verify':
        return <VerifyPage />;
      default:
        return <CSRDetailsPage />;
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      onPageChange={handlePageChange}
      isDarkMode={isDarkMode}
      onToggleDarkMode={handleToggleDarkMode}
    >
      {renderCurrentPage()}
    </Layout>
  );
}