import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "./PostCard.jsx";
import Forms from "./Forms.jsx";

function PostsList() {
    const { posts, addPost } = useContext(PostsContext);

    return (
        <>
            <Forms addToList={addPost} url="http://localhost:3000" />
            <div className="d-flex flex-wrap justify-content-between">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export default PostsList;
