import { Link, useParams } from "react-router-dom";
import techData from "../data/techarticles";
import sportsData from "../data/sportsarticle";
import healthData from "../data/healtharticle"; 

export default function CategoryPage() {
  const { category } = useParams();

  // Normalize category names to match the keys in the categoryDataMap
  const categoryDataMap = {
    tech: techData,
    sports: sportsData,
    health: healthData,
  };

  // Convert category to lowercase and match it with correct key
  const formattedCategory = category?.toLowerCase();
  const filteredArticles = categoryDataMap[formattedCategory] || [];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">{category} Articles</h1>

      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredArticles.map((article) => (
            <Link key={article.id} to={`/category/${category}/${article.id}`}>
              <div className="p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg">
                <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No articles found in this category.</p>
      )}
    </div>
  );
}
