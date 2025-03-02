import { useParams } from "react-router-dom";
import { useState } from "react";
import techData from "../data/techarticles";
import sportsData from "../data/sportsarticle";
import healthData from "../data/healtharticle";

export default function ArticlePage() {
  const { category, id } = useParams();

  // Ensure category is valid and convert ID to a number
  const validCategory = category?.toLowerCase();
  const articleId = parseInt(id, 10);

  const categoryDataMap = {
    tech: techData,
    sports: sportsData,
    health: healthData,
  };

  const article = categoryDataMap[validCategory]?.find((a) => a.id === articleId);

  // Comment Section State
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  if (!article) {
    return <p className="text-center text-gray-500">Article not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-md mt-4" />
      <p className="text-gray-700 text-lg mb-6">
        {article.description || "No description available."}
      </p>

      {/* Comment Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Comments</h2>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full border p-2 rounded-md"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Post Comment
          </button>
        </div>

        {/* Display Comments */}
        <ul className="mt-4 space-y-2">
          {comments.map((comment, index) => (
            <li key={index} className="p-2 border rounded-md bg-gray-100">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

