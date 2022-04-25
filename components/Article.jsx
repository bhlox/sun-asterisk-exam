import Link from "next/link";
import React from "react";

function Article({ title, content, timestamp, id, setIsCreating }) {
  return (
    <>
      <div>
        <Link passHref href={`/article/${id}`}>
          <div className="cursor">
            <h2>{title}</h2>
            <span>{timestamp}</span>
          </div>
        </Link>

        <p>{content}</p>

        <div>
          <Link passHref href={`/edit/${id}`}>
            <button>edit</button>
          </Link>
          <button>delete</button>
        </div>
      </div>
    </>
  );
}

export default Article;
