import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  useGetCurentPostQuery,
  useGetCurentCommentsQuery,
} from "../shared/store/postsApi";
import Comments from "../entities/Comments";


function PostPage() {
  const params = useParams();

  const curentPost = useGetCurentPostQuery({
    id: params.id,
  });
  const curentComments = useGetCurentCommentsQuery({
    id: params.id,
  });
console.log(curentPost);
  return (
    <section className="post-page">
					<button style={{marginBottom:"10px"}}><Link to="/test-react-and-rtk-query"> На главную</Link></button>
      {curentPost.data && curentComments.data ? (
        <>
          <div className="container__postItem">
            <h2>№ {curentPost.data[0].id}</h2>
            <h1 className="postitem__title">
              Заголовок: {curentPost.data[0].title}
            </h1>
            <p className="postitem__body">Текст: {curentPost.data[0].body}</p>
          </div>
          <div style={{marginTop:"50px"}}> Комментарии: </div>
          <ul className="post-page__comments-list">
            {curentComments.data.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
          </ul>
        </>
      ) : null}

      {curentPost.isLoading && curentComments.isLoading && (
        <div>Загрузка данных</div>
      )}
    </section>
  );
}

export default PostPage;
