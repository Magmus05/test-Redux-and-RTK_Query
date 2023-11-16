import { useState, useEffect } from "react";
import { useGetPostsQuery } from "../shared/store/postsApi";
import PostItem from "./PostItem";

function PostsList() {
  const [isMyFetchingDown, setIsMyFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);
  const [currentPostStart, setCurrentPostStart] = useState(0);
  const { data = [], isLoading } = useGetPostsQuery({
    limit:15,
    start: currentPostStart,
  });



  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop < 50) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      60
    ) {
      setIsMyFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop
      );
    }
  };

  useEffect(() => {
    if (isMyFetchingDown) {
      setCurrentPostStart((prev) => {
        return prev < 85 ? prev + 3 : prev;
      });
      setIsMyFetchingDown(false);
    }
  }, [isMyFetchingDown]);

  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 3 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <ul className="post__list">
        {data?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
      {isLoading && <div>Загрузка данных</div>}
    </>
  );
}

export default PostsList;
