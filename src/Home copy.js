import TaskList from './components/TaskList';
import useFetch from './customHooks/useFetch';
import { useState, useEffect } from 'react';
import * as Im from 'react-icons/im';
import { IconContext } from 'react-icons';
import { getAllTasks } from './api';

const Home = () => {

    //const { data: tasks, isPending, error } = useFetch('http://localhost:8000/blogs');
    const [data, setData] = useState(null);
    useEffect(() => {
        getAllTasks.then(res => {
            setData(res);
            console.log(res);
        });
    }, []);

    return (
        <div className="home">

            <IconContext.Provider
                value={{
                    className: "custom-loading-styles",
                }}>
                {error && <div>{error}</div>}
                {isPending && <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Im.ImSpinner2 className="custom-spinner" />
                </div>}
                {tasks && <TaskList aaa={tasks} bbb="Home - Dashboard" />}
            </IconContext.Provider>
        </div>
    )
}

export default Home