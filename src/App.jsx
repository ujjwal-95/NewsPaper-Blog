import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import HeroSection from "./components/Hero";
import FeaturedArticles from "./components/FeaturedArticle";
import CategoryPage from "./pages/Category";
import ArticlePage from "./pages/Articlepage";
import  LanguageProvider  from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
    <Router>
      <Navbar />
      <SearchBar />
      <Routes>
        {/* ✅ Hero and Featured Articles together on the home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedArticles />
            </>
          }
        />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category/:category/:id" element={<ArticlePage />} />
      </Routes>
    </Router>

    </LanguageProvider>
  );
}

export default App;
