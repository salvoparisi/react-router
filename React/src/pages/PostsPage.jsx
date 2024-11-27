import { useEffect, useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostsList from "../components/PostList";

function PostsPage() {
    const { setPosts } = useContext(PostsContext);

    useEffect(() => {
        fetch("http://localhost:3000")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Errore nel recupero dei post:", error));
    }, [setPosts]);

    return (
        <div className="container">
            <h1 className="mb-4">Post Page</h1>
            <PostsList />
        </div>
    );
}

export default PostsPage;
