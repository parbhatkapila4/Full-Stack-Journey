import { useEffect, useState } from "react";

// export function usePostTitle() {
//   const [posts, setPosts] = useState({});

//   async function getPosts() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const json = await response.json();
//     setPosts(json);
//   }
//   useEffect(() => {
//     getPosts();
//   }, []);

//   return posts.title;
// }


export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);  //

  async function getDetails() {
    setLoading(true);
    // this means that before sending the request or whenever this function is called the loader is reset to true
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

useEffect(() => {
  setInterval(getDetails , 10000)
}, [])


  return {
    finalData,
    loading
  };
}
