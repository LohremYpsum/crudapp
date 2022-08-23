import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../customHooks/useFetch_old';
import * as Fa from 'react-icons/fa';
import { IconContext } from 'react-icons';


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

    // delete current single Task via id-match
    /*const handleDelete = () => {
        deleteTask(id).then(() => {
            navigate('/');
        })
    };
    */


    /*
    const newEmps = data.map((emp, index) => ({
        "id": emp.title.title,
        "name": emp.title.title,
        "textfield": title.textfield,
        "createdAt": new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).
            format(emp.createdAt)
    }));

    console.log(newEmps);

        const handleDelete = () => {
        fetch('http://localhost:3000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
*/
    return (

        <div className="blog-details">
            <IconContext.Provider
                value={{
                    className: "custom-icon-styles",
                }}

            >
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data && (
                    <article>
                        <h2>{data.title}</h2>
                        <p>Created by {data.author}</p>
                        <div>
                            {data.body}
                        </div>
                        <button onClick={handleDelete}>
                            <Fa.FaTrashAlt style={{ transform: 'rotate(2deg)' }} />
                            Delete Post
                        </button>

                    </article>

                )}
            </IconContext.Provider>
        </div>


    );
};

export default TaskDetails;