import posts from '../components/posts'
import "bootstrap/dist/css/bootstrap.min.css";

function Posts() {
    console.log(posts);

    return (
        <>
            <h1>Post Page</h1>
            <div className="container">
                <div className="row">
                    {posts.map((post) => (
                        <div className="col-md-4 pb-4" key={post.id}>
                            <div className="card">
                                <img src={post.image} alt={post.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text" style={{ height: "44px" }}>{post.description}</p>
                                    <a href="#" className="btn btn-primary">{post.category}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Posts