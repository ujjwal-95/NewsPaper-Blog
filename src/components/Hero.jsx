import { Link } from "react-router-dom";
import techData from "../data/techarticles";
import healthData from "../data/healtharticle";

// Function to get two random articles (one from each category)
function getRandomArticles() {
  const techArticle = techData[Math.floor(Math.random() * techData.length)];
  const healthArticle = healthData[Math.floor(Math.random() * healthData.length)];
  return [
    { ...techArticle, category: "tech" }, // Ensure category matches the route
    { ...healthArticle, category: "health" }
  ];
}

export default function HeroSection() {
  const heroArticles = getRandomArticles(); // Fetch two random articles

  return (
    <div className="max-w-5xl px-4 sm:px-6 md:px-8 mx-auto flex flex-col md:flex-row gap-4 justify-center mt-6">
      {heroArticles.map((article, index) => (
        <Link
          key={index}
          to={`/category/${article.category}/${article.id}`} // Ensure correct category in URL
          className="relative w-full md:w-1/2 h-[300px] overflow-hidden rounded-lg"
        >
          {/* Image with hover effect */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />

          {/* Title Below Image */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-3 rounded-b-lg">
            <h2 className="text-lg font-semibold">{article.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
