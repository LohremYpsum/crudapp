import { Link } from 'react-router-dom';

const TaskList = ({ aaa, bbb }) => {

    return (
        <div className="blog-list">
            <h2> {bbb}</h2>
            {aaa.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className=" hover-2">{blog.id}. {blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link>
                </div>
            ))
            }
        </div >
    );
};

export default TaskList;