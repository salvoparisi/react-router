import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function PostLayout() {
    const [post, setPost] = useState(null)
    const { id } = useParams()
    console.log(id);


    const fetchData = () => {
        fetch(`http://localhost:3000/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error("Errore 404", error));
    };
    console.log(post);

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>

            {
                post ? (
                    <>
                        <div className='d-flex justify-content-between p-4 mt-5 mb-4 border border-primary rounded border-4'>
                            <img src={post.image} alt="" />
                            <div className='d-flex flex-column justify-content-between'>
                                <div className='d-flex flex-column align-items-end'>
                                    <h1 className='text-end'>{post.title}</h1>
                                    <h4 className='w-50 text-end'>{post.description}</h4>
                                </div>
                                <div className="tags text-end">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="me-2 badge bg-primary">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="badge bg-warning text-dark">{post.category}</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start mt-3">
                            <Link to="/posts" className="btn btn-primary">
                                Torna Indietro
                            </Link>
                        </div>
                    </>

                ) : (
                    <div>loading...</div>
                )
            }
        </>
    )
}

export default PostLayout
