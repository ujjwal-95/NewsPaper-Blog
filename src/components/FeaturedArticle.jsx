import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import techData from "../data/techarticles";
import sportsData from "../data/sportsarticle";
import healthData from "../data/healtharticle";
import Footer from "./Footer";

export default function FeaturedArticles() {
  // Combine articles from all categories
  const allArticles = [...techData, ...sportsData, ...healthData];

  // Select 4 random articles
  const featuredArticles = allArticles.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
      <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Left for even, Right for odd
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.60, delay: index * 0.2 }} // Staggered effect
          >
            <Link
              to={article.category ? `/category/${article.category.toLowerCase()}/${article.id}` : "#"}
              className="block relative group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-3">
                <h3 className="text-lg font-semibold">{article.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
