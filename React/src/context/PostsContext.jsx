import { createContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        setPosts(newPost)
    }
    const deletePost = (id) => setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));

    return (
        <PostsContext.Provider key={posts.id} value={{ posts, setPosts, addPost, deletePost }}>
            {children}
        </PostsContext.Provider>
    );
};
