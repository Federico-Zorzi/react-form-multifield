import { useState } from "react";

import Article from "../Article";

import articles from "../../assets/data/articles";

export default function Main() {
  const [articleTitleInput, setArticleTitleInput] = useState("");
  const [articleContentInput, setArticleContentInput] = useState("");
  const [articleAuthorInput, setArticleAuthorInput] = useState("");

  const [articlesList, setArticlesList] = useState(articles);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!articleTitleInput || !articleContentInput || !articleAuthorInput) {
      alert("Completa tutti i campi per creare il nuovo articolo");
      return;
    }

    const updatedList = [
      ...articlesList,
      {
        title: articleTitleInput,
        content: articleContentInput,
        author: articleAuthorInput,
      },
    ];
    setArticlesList(updatedList);

    /* reset input fields */
    setArticleTitleInput("");
    setArticleContentInput("");
    setArticleAuthorInput("");
  };

  const deleteArticle = (index) => {
    const updatedList = articlesList.filter((article, i) => i !== index);

    setArticlesList(updatedList);
  };

  const modifyArticle = (index, modifyTitleInput, setModifyTitleInput) => {
    console.log(index, modifyTitleInput);

    const updatedList = [...articlesList];

    const articleTomodify = updatedList.find((article, i) => i === index);
    articleTomodify.title = modifyTitleInput;

    setArticlesList(updatedList);

    /* reset input fields */
    setModifyTitleInput("");
  };

  return (
    <main>
      <div className="container">
        {/* FORM SECTION */}
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* INPUT FOR ARTICLE TITLE */}
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="articleTitle" className="form-label">
                    Titolo articolo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="articleTitle"
                    value={articleTitleInput}
                    onChange={(e) => {
                      setArticleTitleInput(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* INPUT FOR ARTICLE AUTHOR */}
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="articleAuthor" className="form-label">
                    Autore
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="articleAuthor"
                    value={articleAuthorInput}
                    onChange={(e) => {
                      setArticleAuthorInput(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-12">
                {/* INPUT FOR ARTICLE CONTENT */}
                <div className="mb-3">
                  <label htmlFor="articleContent" className="form-label">
                    Contenuto articolo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="articleContent"
                    value={articleContentInput}
                    onChange={(e) => {
                      setArticleContentInput(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* BUTTON FOR SUBMIT */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>

        {/* ARTICLE SECTION */}
        <section className="article-section">
          {articlesList.map((article, index) => (
            <Article
              key={index}
              index={index}
              title={article.title}
              content={article.content}
              author={article.author}
              deleteFunction={deleteArticle}
              modifyFunction={modifyArticle}
            ></Article>
          ))}
        </section>
      </div>
    </main>
  );
}
