import { useState, useEffect } from 'react';
import React from 'react'
import TaskList from './components/TaskList';
import useFetch from './customHooks/useFetch';

const Home = () => {

    const { data: tasks, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading... (make this a component)</div>}
            {tasks && <TaskList aaa={tasks} bbb="Home - Dashboard" />}
        </div>
    )
}

export default Home