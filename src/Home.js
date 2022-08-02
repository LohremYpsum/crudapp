import { useState, useEffect } from 'react';
import { getAllTasks } from './api';
import { Link } from 'react-router-dom';
import './customTable.css';

import TaskList from './components/TaskList';
import * as Im from 'react-icons/im';
import { IconContext } from 'react-icons';

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
            {data && <TaskList dataCollection={data} heading="Home - Dashboard" />}
        </div>
    )
}

export default Home