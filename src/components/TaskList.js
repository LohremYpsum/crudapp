import { Link } from 'react-router-dom';
import { deleteTask } from '../api';

const TaskList = ({ dataCollection, heading }) => {


    return (
        <div className="blog-list">
            <h2> {heading}</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Contentpreview</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCollection && dataCollection.map(singleEntry => (
                        <tr key={singleEntry.ts}>
                            <td>{singleEntry.ts}</td>
                            <td>{singleEntry.data.title.author}</td>
                            <td>{singleEntry.data.title.title}</td>
                            <td>{singleEntry.data.title.textfield.substring(0, 25)}</td>
                            <td>
                                <Link to={`/tasks/${singleEntry.ref.id}`}>Link</Link>
                                <button 
                                onClick={() => deleteTask(singleEntry.ref.id)}>
                                Delete
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;