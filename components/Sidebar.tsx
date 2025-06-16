import { useState } from 'react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ icon, text, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 p-2 rounded text-sm text-right transition-colors ${
        isActive
          ? 'bg-red-50 text-red-600'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function SearchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M17 8.99994C17 8.48812 16.8047 7.9763 16.4142 7.58579C16.0237 7.19526 15.5118 7 15 7M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H7V19H9V17H11L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function GlobalIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M19 9C19 12.866 15.866 16 12 16M19 9C19 5.13401 15.866 2 12 2M19 9H5M12 16C8.13401 16 5 12.866 5 9M12 16C13.7509 14.0832 14.7468 11.5956 14.8009 9C14.7468 6.40442 13.7509 3.91685 12 2M12 16C10.2491 14.0832 9.25498 11.5956 9.20091 9C9.25498 6.40442 10.2491 3.91685 12 2M12 16V18M5 9C5 5.13401 8.13401 2 12 2M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20M14 20C14 18.8954 13.1046 18 12 18M14 20H21M10 20C10 18.8954 10.8954 18 12 18M10 20H3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M21.7003 16.1181C21.8939 15.616 22 15.0704 22 14.5C22 12.1564 20.2085 10.2313 17.9203 10.0194C17.4522 7.17213 14.9798 5 12 5C11.5534 5 11.1183 5.04879 10.6995 5.14132M7.28746 7.28585C6.67317 8.06419 6.24759 8.99838 6.07974 10.0194C3.79151 10.2313 2 12.1564 2 14.5C2 16.9853 4.01472 19 6.5 19H17.5C17.9561 19 18.3963 18.9322 18.8112 18.806M3 3L21 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
      <path
        d="M16.5 11.8832C15.515 12.3286 14.4215 12.5766 13.2701 12.5766C8.93647 12.5766 5.42337 9.06353 5.42337 4.7299C5.42337 3.57851 5.67135 2.48505 6.11683 1.5C3.39432 2.73122 1.5 5.47102 1.5 8.65327C1.5 12.9869 5.0131 16.5 9.34673 16.5C12.529 16.5 15.2688 14.6057 16.5 11.8832Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-12 h-6">
        <svg className="w-full h-full" fill="none" viewBox="0 0 60 24">
          <text x="0" y="16" fontSize="14" fill="#CCCCCC" fontFamily="Tahoma">
            اوراش
          </text>
        </svg>
      </div>
      <div className="w-6 h-6">
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#CCCCCC" />
        </svg>
      </div>
    </div>
  );
}

export function Sidebar({ currentPage, onPageChange, isDarkMode, onToggleDarkMode }: SidebarProps) {
  return (
    <div className="w-64 h-full bg-white border-l border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <NavItem
          icon={<SearchIcon />}
          text="چیست ؟ CSR"
          isActive={currentPage === 'details'}
          onClick={() => onPageChange('details')}
        />
        <NavItem
          icon={<PlayIcon />}
          text="فیلم های آموزشی"
          isActive={currentPage === 'videos'}
          onClick={() => onPageChange('videos')}
        />
        <NavItem
          icon={<GlobalIcon />}
          text="نسخه آنلاین"
          isActive={currentPage === 'online'}
          onClick={() => onPageChange('online')}
        />
        <NavItem
          icon={<DownloadIcon />}
          text="دانلود نسخه آفلاین"
          isActive={currentPage === 'offline'}
          onClick={() => onPageChange('offline')}
        />
        <NavItem
          icon={<CheckIcon />}
          text="بررسی صحت کلیدها"
          isActive={currentPage === 'verify'}
          onClick={() => onPageChange('verify')}
        />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-4">
        <button
          onClick={onToggleDarkMode}
          className="flex items-center gap-2 px-2 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <MoonIcon />
          <span>حالت شب</span>
        </button>
        <p className="text-xs text-gray-400 text-center">
          توسعه داده شده توسط تیم تولید اوراش © 2024
        </p>
      </div>
    </div>
  );
}