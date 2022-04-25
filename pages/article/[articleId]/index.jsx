import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function ArticleId() {
  const [articleData, setArticleData] = useState();

  const router = useRouter();

  useEffect(() => {
    const { articleId } = router.query;
    const storedArticles = JSON.parse(localStorage.getItem("list"));

    const foundArticle = storedArticles.filter((article) => {
      return +article.id === +articleId;
    });

    setArticleData(foundArticle[0]);
  }, [router.query]);

  return (
    <div>
      <div>
        <h2>{articleData?.title}</h2>
        <span>{articleData?.timestamp}</span>
      </div>

      <div>
        <p>{articleData?.content}</p>
      </div>
    </div>
  );
}

export default ArticleId;
