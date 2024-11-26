import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"

function PostLayout() {
    const [post, setPost] = useState()
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
        <div>ciao</div>
    )
}

export default PostLayout
