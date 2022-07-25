import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';
import * as Im from 'react-icons/im';
import { IconContext } from 'react-icons';
import { getAllTasks } from './api';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getAllTasks.then(res => {
            setData(res);
            console.log(res);
        });
    }, []);


    return (
        <div className="home">
            <table id="customers">
                <tr>
                    <th>Date</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Contentpreview</th>
                    <th>Details</th>
                </tr>
                {data && data.map(singleEntry => (
                    <tr key={singleEntry.ts}>
                        <td>{singleEntry.ts}</td>
                        <td>{singleEntry.data.title.author}</td>
                        <td>{singleEntry.data.title.title}</td>
                        <td>{singleEntry.data.title.textfield.substring(0, 25)}</td>
                        <td><Link to={`/blogs/${singleEntry.ref.id}`}>Link</Link></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Home