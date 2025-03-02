import techArticles from "./techarticles";
import sportsArticles from "./sportsarticle";
import healthArticles from "./healtharticle";
import ArticleData from "./ArticleData";

const allArticles = [...techArticles, ...sportsArticles,...healthArticles, ...ArticleData];

export default allArticles;
