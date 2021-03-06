import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import ArticleForm from "../components/ArticleForm";
import Article from "../components/Article";

export default function Home() {
  const [isCreating, setIsCreating] = useState();
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("list"));
    setArticleList(storedArticles);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div>
          <button onClick={() => setIsCreating((prev) => !prev)}>
            Create article
          </button>
        </div>

        {isCreating && <ArticleForm setArticleList={setArticleList} />}

        {articleList.map((article) => (
          <Article
            key={Math.random() * 232}
            {...article}
            setIsCreating={setIsCreating}
          />
        ))}
      </section>
    </div>
  );
}
