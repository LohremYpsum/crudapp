import { useState, useEffect } from 'react';
import React from 'react'
import TaskList from './components/TaskList';
import useFetch from './customHooks/useFetch';
import * as Fa from 'react-icons/fa';
import * as Im from 'react-icons/im';
import { IconContext } from 'react-icons';

const Home = () => {

    const { data: tasks, isPending, error } = useFetch('http://localhost:8000/blogs');

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