import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/nweshublogo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  let timeoutId;
  const { language, translations } = useLanguage();

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowCategories(false);
    }, 300);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain scale-190" />


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1">
                <span>{translations[language].categories}</span>
                <ChevronDown size={16} />
              </button>

              {showCategories && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg z-50 rounded-md">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to="/category/tech">{translations[language].tech}</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to="/category/sports">{translations[language].sports}</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to="/category/health">{translations[language].health}</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Language Switcher Component */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-4 pb-4">
            <div>
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center space-x-1 w-full text-left"
              >
                <span>{translations[language].categories}</span>
                <ChevronDown size={16} />
              </button>

              {showCategories && (
                <div className="pl-4">
                  <Link to="/category/tech" className="block py-1">
                    {translations[language].tech}
                  </Link>
                  <Link to="/category/sports" className="block py-1">
                    {translations[language].sports}
                  </Link>
                  <Link to="/category/health" className="block py-1">
                    {translations[language].health}
                  </Link>
                </div>
              )}
            </div>

            {/* Language Switcher Component in Mobile Menu */}
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}
