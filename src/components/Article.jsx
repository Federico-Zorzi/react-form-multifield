import { useState } from "react";

export default function Article({
  index,
  title,
  content,
  author,
  deleteFunction,
  modifyFunction,
}) {
  const [modifyTitleInput, setModifyTitleInput] = useState("");

  return (
    <article>
      <div className="card my-3">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text">{content}</p>
          <span className="fst-italic">{author}</span>

          {/* DELETE ARTICLE FUNCTION */}
          <div className="delete-article mt-1 ms-auto">
            <button
              className="btn btn-danger "
              type="button"
              onClick={() => deleteFunction(index)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

          {/* MODIFY ARTICLE TITLE FUNCTION */}
          <div className="modify-title mt-1 ms-auto">
            <input
              type="text"
              id="floatingInput"
              placeholder="Modifica Titolo"
              value={modifyTitleInput}
              onChange={(e) => setModifyTitleInput(e.target.value)}
            />

            <button
              className="btn btn-success ms-2"
              type="button"
              onClick={() =>
                modifyFunction(index, modifyTitleInput, setModifyTitleInput)
              }
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
