import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

function PostCard({ post }) {
    const { deletePost } = useContext(PostsContext);

    const handleDelete = () => {
        fetch(`http://localhost:3000/${post.id}`, { method: "DELETE" })
            .then((response) => response.json())
            .then(() => deletePost(post.id))
            .catch((error) => console.error("Errore durante la cancellazione:", error));
    };

    return (
        <div className="max-w position-relative border p-3">
            <button
                className="btn btn-danger position-absolute end-0 top-0 m-1"
                onClick={handleDelete}
            >
                Delete
            </button>
            <Link className="imgLink" to={`/posts/${post.id}`}>
                <img src={post.image} alt="" className="img-fluid" />
            </Link>
            <h3>{post.title}</h3>
            <p className="min-h">{post.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="tags">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="me-2 badge bg-primary">
                            {tag}
                        </span>
                    ))}
                </div>
                <span className="badge bg-warning text-dark">{post.category}</span>
            </div>
        </div>
    );
}

export default PostCard;
