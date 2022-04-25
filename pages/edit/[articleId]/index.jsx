import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import ArticleForm from "../../../components/ArticleForm";

function Edit() {
  const [data, setData] = useState();

  const router = useRouter();
  const { articleId } = router.query;

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("list"));

    const foundArticle = storedArticles.filter((article) => {
      return +article.id === +articleId;
    });

    setData(foundArticle[0]);
  }, [router.query]);

  console.log(data);

  return (
    <section>
      <div>
        <h2>Edit current article</h2>
      </div>

      {data && (
        <ArticleForm
          articleId={articleId}
          editTitle={data.title}
          editContent={data.content}
        />
      )}
    </section>
  );
}

export default Edit;
