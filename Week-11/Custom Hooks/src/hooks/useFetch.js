import { useEffect, useState } from "react";

export function usePostTitle() {
  const [posts, setPosts] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPosts(json);
  }
  useEffect(() => {
    getPosts();
  }, []);

  return posts.title;
}


export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, []);
  return {
    finalData,
  };
}
