import { useState } from "react";
import { Link } from "react-router-dom";
import techData from "../data/techarticles";
import sportsData from "../data/sportsarticle";
import healthData from "../data/healtharticle";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Combine all articles into one array
  const allArticles = [...techData, ...sportsData, ...healthData];

  // Search function
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm.trim() === "") {
      setFilteredArticles([]);
      return;
    }

    // Filter articles by title
    const results = allArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );

    setFilteredArticles(results);
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = () => {
    setQuery(""); // Clear search bar
    setFilteredArticles([]); // Close suggestions
  };

  return (
    <div className="relative max-w-3xl mx-auto mt-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={handleSearch}
        className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
      />

      {/* Search Results */}
      {filteredArticles.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white shadow-md rounded-md overflow-hidden z-10">
          {filteredArticles.map((article) => (
            <li key={article.id} className="border-b last:border-none">
              <Link
                to={`/category/${article.category}/${article.id}`}
                className="block p-2 hover:bg-gray-100"
                onClick={handleSuggestionClick} // Clear input & close suggestions
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

