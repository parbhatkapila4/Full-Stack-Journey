import { useState } from "react";
import PostComponent from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const postComponents = posts.map(post => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Parbhat",
        subtitle: "11000 Followers",
        time: "2m ago",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s",
        description:
          "Want to know how to win big? Check out how these folks win $6000 in Bounties",
      },
    ]);
  }

  return (
    <div className="bg-[#dfe6e9] h-screen">
      <button onClick={addPost}>Add Post</button>
      <div className="flex justify-center">
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
