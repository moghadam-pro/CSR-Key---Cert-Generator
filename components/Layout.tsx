import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

function BackgroundDecoration() {
  return (
    <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
      <svg className="w-full h-full" fill="none" viewBox="0 0 919 919">
        <circle
          cx="459.5"
          cy="459.5"
          r="309.5"
          fill="#E1141E"
          fillOpacity="0.08"
        />
        <path
          d="M605.915 659.997L652.132 686.681C667.718 695.68 678.155 710.192 682.482 726.348C686.808 742.503 684.995 760.34 675.966 775.978L649.356 822.068C640.354 837.66 625.814 848.149 609.66 852.48C593.506 856.811 575.672 855.002 560.038 845.976L513.961 819.373C498.618 810.515 488.221 796.288 483.773 780.435L483.565 779.679L483.564 779.675L483.362 778.917C479.224 762.985 481.119 745.463 489.98 730.115L516.644 683.932C525.505 668.584 539.732 658.181 555.626 653.754L556.385 653.548L556.387 653.547C572.543 649.216 590.329 650.999 605.915 659.997Z"
          stroke="#E1141E"
          strokeOpacity="0.08"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export function Layout({ children, currentPage, onPageChange, isDarkMode, onToggleDarkMode }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-100 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex h-screen">
        {/* Background decoration */}
        <BackgroundDecoration />
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Main content with rounded corners and shadow */}
          <div className="flex-1 bg-white rounded-3xl shadow-lg m-6 overflow-hidden relative">
            <div className="flex flex-col h-full">
              <Header />
              <div className="flex-1 overflow-auto">
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar
          currentPage={currentPage}
          onPageChange={onPageChange}
          isDarkMode={isDarkMode}
          onToggleDarkMode={onToggleDarkMode}
        />
      </div>
    </div>
  );
}