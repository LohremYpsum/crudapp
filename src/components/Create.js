import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../api';

const Create = () => {
    const [title, setTitle] = useState('');
    const [textfield, setTextfield] = useState('');
    const [author, setAuthor] = useState('admin');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    function resetInputField() {
        setTitle('');
        setTextfield('');
    }

    const handleSubmit = (event) => {
        // Prevnet page-refresh after clicking button
        event.preventDefault();

        const collectionObject = { title, textfield, author }
        createTask(collectionObject)
        .then(res => {
            console.log('Task details added to the database');
        });

        resetInputField()
        .then(() => { navigate('/'); })
    }

    return (
        <div className="create">
            <h2>Add a New Task - via controlled Inputs</h2>
            <form onSubmit={handleSubmit}>
                <label>Ticket -Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                >
                </input>
                <label>
                    Task:
                </label>
                <textarea
                    required
                    value={textfield}
                    onChange={(event) => setTextfield(event.target.value)}
                >
                </textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="me">Me</option>
                </select>
                {!isPending && <button>Add Entry</button>}
                {isPending && <button>Adding Blog</button>}
                <p>{title}</p>
                <p>{textfield}</p>
                <p>{author}</p>
            </form>
        </div>
    );
};

export default Create;