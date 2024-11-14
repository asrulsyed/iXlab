import { useState } from 'react';
import { Send, ChevronDown, Sun, Moon } from 'lucide-react';

// Theme Toggle Component (Updated)
const ThemeToggle = ({ isDark, toggleTheme }: any) => (
  <button
    onClick={toggleTheme}
    className={`relative flex items-center gap-2 px-3 py-1 text-xs rounded-lg font-medium tracking-wider border transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-300'
        : 'bg-gray-200/50 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-gray-700'
    }`}
  >
    <div className="flex items-center gap-2">
      <span className="min-w-[90px]">{isDark ? 'DARK MODE' : 'LIGHT MODE'}</span>
      <div className="relative w-4 h-4 flex items-center justify-center">
        <div className={`absolute transform transition-all duration-500 ${isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}>
          <Moon size={14} />
        </div>
        <div className={`absolute transform transition-all duration-500 ${isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
          <Sun size={14} />
        </div>
      </div>
    </div>
  </button>
);

// ClusterLogo Component
const ClusterLogo = ({ isDark }: any) => (
  <div className={`relative w-10 h-10 rounded-xl border overflow-hidden group-hover:border-opacity-60 transition-all duration-500 ${
    isDark 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-gray-100 border-gray-200'
  }`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-6 h-6">
        <div className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${
          isDark ? 'bg-gray-400 group-hover:bg-gray-300' : 'bg-gray-600 group-hover:bg-gray-700'
        }`} />
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/2 w-px h-full transform -translate-x-1/2 transition-colors duration-300 ${
            isDark ? 'bg-gray-600 group-hover:bg-gray-500' : 'bg-gray-300 group-hover:bg-gray-400'
          }`} />
          <div className={`absolute top-1/2 left-0 w-full h-px transform -translate-y-1/2 transition-colors duration-300 ${
            isDark ? 'bg-gray-600 group-hover:bg-gray-500' : 'bg-gray-300 group-hover:bg-gray-400'
          }`} />
          <div className="absolute top-0 left-0 w-full h-full" style={{ transform: 'rotate(45deg)' }}>
            <div className={`absolute top-1/2 left-0 w-full h-px transform -translate-y-1/2 transition-colors duration-300 ${
              isDark ? 'bg-gray-600 group-hover:bg-gray-500' : 'bg-gray-300 group-hover:bg-gray-400'
            }`} />
          </div>
          <div className="absolute top-0 left-0 w-full h-full" style={{ transform: 'rotate(-45deg)' }}>
            <div className={`absolute top-1/2 left-0 w-full h-px transform -translate-y-1/2 transition-colors duration-300 ${
              isDark ? 'bg-gray-600 group-hover:bg-gray-500' : 'bg-gray-300 group-hover:bg-gray-400'
            }`} />
          </div>
        </div>
        {/* Outer nodes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <div
            key={angle}
            className={`absolute w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              isDark ? 'bg-gray-400 group-hover:bg-gray-300' : 'bg-gray-600 group-hover:bg-gray-700'
            }`}
            style={{
              transform: `rotate(${angle}deg) translate(12px) rotate(-${angle}deg)`
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

// MenuButton Component
const MenuButton = ({ label, onClick, active = false, isDark }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-3 py-1.5 text-xs rounded-lg font-medium tracking-wider transition-all duration-300
      ${active 
        ? isDark 
          ? 'bg-gray-100/10 text-white border border-gray-100/20 hover:bg-gray-100/15'
          : 'bg-gray-900/10 text-gray-900 border border-gray-900/20 hover:bg-gray-900/15'
        : isDark
          ? 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-800 hover:text-gray-300'
          : 'bg-gray-200/50 text-gray-600 border border-gray-300 hover:bg-gray-200 hover:text-gray-700'}`}
  >
    {label}
    <ChevronDown size={14} />
  </button>
);

// Main Component
const EdithInterface = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOptimDropdownOpen, setIsOptimDropdownOpen] = useState(false);
  const [isDeployDropdownOpen, setIsDeployDropdownOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('genimg');
  const [selectedVersion, setSelectedVersion] = useState('OPTIM 1.0.0');

  const versions = ['OPTIM 1.0.0', 'Atlas-net 1.0.0', 'SparkX-3.5'];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <header className={`border-b p-4 flex justify-between items-center sticky top-0 z-20 transition-colors duration-300 gap-3 ${
        isDark 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-gray-50 border-gray-200'
      }`}>
        {/* Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center gap-2 px-3 py-1 text-xs rounded-lg font-medium tracking-wider border transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-300'
              : 'bg-gray-200/50 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-gray-700'
          }`}
        >
          MENU
          <ChevronDown size={14} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 text-xs rounded-lg font-medium tracking-wider border transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-800 text-gray-300 border-gray-700'
              : 'bg-gray-100 text-gray-700 border-gray-200'
          }`}>
            EDITH CLUSTER ixiv
          </div>
          <button 
            onClick={() => setIsOptimDropdownOpen(!isOptimDropdownOpen)}
            className="relative flex items-center gap-2 px-3 py-1 text-xs bg-yellow-900/20 text-yellow-500 rounded-lg font-medium tracking-wider border border-yellow-900/50 hover:bg-yellow-900/30 transition-colors duration-300"
          >
            {selectedVersion}
            <ChevronDown size={14} className={`transition-transform duration-300 ${isOptimDropdownOpen ? 'rotate-180' : ''}`} />
            
            {isOptimDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 py-2 bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
                {versions.map((version) => (
                  <button
                    key={version}
                    onClick={() => {
                      setSelectedVersion(version);
                      setIsOptimDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs tracking-wider transition-colors duration-200
                      ${version === selectedVersion 
                        ? 'bg-yellow-900/20 text-yellow-500' 
                        : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    {version}
                  </button>
                ))}
              </div>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDeployDropdownOpen(!isDeployDropdownOpen)}
            className="relative flex items-center gap-2 px-3 py-1 text-xs bg-green-900/20 text-green-500 rounded-lg font-medium tracking-wider border border-green-900/50 hover:bg-green-900/30 transition-colors duration-300"
          >
            <span className="min-w-[90px]">DEPLOY AGENT</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isDeployDropdownOpen ? 'rotate-180' : ''}`} />
            
            {isDeployDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 py-2 bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
                <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 transition-colors duration-200">
                  Start Deployment
                </button>
                <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 transition-colors duration-200">
                  View Status
                </button>
              </div>
            )}
          </button>
          
          <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        </div>
      </header>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-y-0 left-0 w-64 backdrop-blur-sm border-r p-4 z-10 transform transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-gray-100/50 border-gray-200'
        }`}>
          <div className="mt-16 space-y-2">
            <MenuButton 
              label="GEN IMG" 
              onClick={() => setActiveMenuItem('genimg')}
              active={activeMenuItem === 'genimg'}
              isDark={isDark}
            />
            <MenuButton 
              label="LOSS RECOVERY" 
              onClick={() => setActiveMenuItem('lossrecovery')}
              active={activeMenuItem === 'lossrecovery'}
              isDark={isDark}
            />
            <MenuButton 
              label="DEX SCANNER" 
              onClick={() => setActiveMenuItem('dexscanner')}
              active={activeMenuItem === 'dexscanner'}
              isDark={isDark}
            />
            <MenuButton 
              label="ELON CLONE" 
              onClick={() => setActiveMenuItem('elonclone')}
              active={activeMenuItem === 'elonclone'}
              isDark={isDark}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="flex items-center gap-3 mb-12 group">
          <ClusterLogo isDark={isDark} />
          <div className={`text-2xl font-light tracking-wider transition-colors duration-300 ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}>
            E.D.I.T.H.
          </div>
        </div>

        <div className="w-full max-w-2xl relative group">
          <input
            type="text"
            placeholder="Ask me anything..."
            className={`w-full p-5 pr-28 rounded-xl border focus:outline-none transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 focus:border-gray-600 text-gray-200 placeholder:text-gray-600'
                : 'bg-white border-gray-200 focus:border-gray-300 text-gray-800 placeholder:text-gray-400'
            }`}
          />
          <button className={`absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 flex items-center gap-2 transition-colors duration-300 ${
            isDark 
              ? 'text-gray-500 hover:text-gray-300'
              : 'text-gray-400 hover:text-gray-600'
          }`}>
            <span className="text-sm font-light tracking-wider">SEND</span>
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </main>

      <footer className="p-6 text-center">
        <div className={`text-sm font-light tracking-wider transition-colors duration-300 ${
          isDark ? 'text-gray-600' : 'text-gray-400'
        }`}>
          ixlab © 2024
        </div>
      </footer>
    </div>
  );
};

export default EdithInterface;
