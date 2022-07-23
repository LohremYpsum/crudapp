import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../customHooks/useFetch';

const TaskDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // fetches Endpoint for current Blog-Entry: CHECK THE CORRECT PORT NUMBER duh (db-port, not URL-Port)
    const { data, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Created by {data.author}</p>
                    <div>
                        {data.body}
                    </div>
                    <button onClick={handleDelete}>Delete Post</button>
                </article>

            )}
        </div>
    );
};

export default TaskDetails;