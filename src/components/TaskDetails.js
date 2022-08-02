import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask, deleteTask } from '../api';



const TaskDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    // fetch API-Endpoints with useEffect. Functions declared in api/index.js


    //get current single task via id-match
    
    useEffect(() => {
        getTask(id)
            .then((res) => {
                setData(data);
                //console.log(data)
            })
    }, [id]);

    const test = {id}

    console.log('log objectprops',test)

    /*
    useEffect( () => {
        const fetchData = async () => {
            const newData = await getTask(id);
            //convert Data to JSON
            const json = await newData.json();
            return json;
        }
        const result = fetchData()
        .catch(console.error)
        console.log(result)
    }, [])
*/

    
    return (

        <div className="blog-details">

            {data && data.map(one => (
                <article>
                    <h2>{one.title.title}</h2>
                    <p>Created by {one.title.title}</p>
                    <div>
                        {one.title.title}
                    </div>
                </article>
            ))}

        </div>

    );
};

export default TaskDetails;