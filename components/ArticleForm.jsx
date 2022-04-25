import React, { useState } from "react";

// const list = localStorage.getItem();

function ArticleForm({ setArticleList, editTitle, editContent, articleId }) {
  console.log(editTitle, editContent);

  const [articleTitle, setArticleTitle] = useState(editTitle ? editTitle : "");
  const [articleContent, setArticleContent] = useState(
    editContent ? editContent : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedList = JSON.parse(localStorage.getItem("list"));

    if (editTitle) {
      let foundArticle = storedList.filter((article) => {
        return +article.id === +articleId;
      });
      foundArticle = {
        title: articleTitle,
        content: articleContent,
        timestamp: new Date().toString(),
      };
    }

    const updatedList = storedList
      ? [
          ...storedList,
          {
            id: Math.random() * 123,
            title: articleTitle,
            content: articleContent,
            timestamp: new Date().toString(),
          },
        ]
      : [
          {
            id: Math.random() * 123,
            title: articleTitle,
            content: articleContent,
            timestamp: new Date().toString(),
          },
        ];

    localStorage.setItem("list", JSON.stringify(updatedList));

    setArticleList((prev) => [
      ...prev,
      {
        id: Math.random() * 123,
        title: articleTitle,
        content: articleContent,
        timestamp: new Date().toString(),
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="content">content</label>
          <input
            type="text"
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ArticleForm;
