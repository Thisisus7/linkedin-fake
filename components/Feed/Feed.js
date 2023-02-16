import { handlePostState, useSSRPostsState } from "@/atoms/postAtom";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import Input from "./Input"
import Post from "./Post";

function Feed({ posts }) {
  const [realTimePosts, setRealTimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
  // fetch post
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("./api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();
      setRealTimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };
    fetchPosts();
  }, [handlePost]);  // only if handlePost changes, then run useEffect

  return (
    <div className="space-y-6 pb-24 max-w-md">
        <Input />
        {/* Posts */}
        {!useSSRPosts 
          ? realTimePosts.map((post) => <Post key={post._id} post={post} />)
          : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  )
}

export default Feed