import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask, deleteTask } from '../api';
import * as Fa from 'react-icons/fa';
import { IconContext } from 'react-icons';


const TaskDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    // fetch API-Endpoints with useEffect. Functions declared in api/index.js

    //get current single task via id-match
    useEffect(() => {
        getTask(id)
            .then(res => {
                setData(data);
            })
    }, []);

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

            {data && data.map(one => (
                <article>
                    <h2>{one.ts}</h2>
                    <p>Created by {one.ts}</p>
                    <div>
                        {one.ts}
                    </div>
                </article>
            ))}

        </div>

    );
};

export default TaskDetails;