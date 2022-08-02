import { client, q } from '../config/db';

export const getAllTasks = client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_tasks'))))
    .then(response => {
        const expenseRef = response.data;
        const getAllDataQuery = expenseRef.map(ref => {
            return q.Get(ref);
        });
        return client.query(getAllDataQuery).then(data => data);
    })
    .catch(error => console.error('Error: ', error.message));

export const createTask = (title, textfield, author) =>
    client
        .query(
            q.Create(q.Collection('tasks'), {
                data: {
                    title,
                    textfield,
                    author
                }
            })
        )
        .then(ret => ret)
        .catch(error => console.error('Error: ', error.message));

export const getTask = (taskId) =>
    client.
        query(
            q.Get(q.Ref(q.Collection('tasks'), taskId))
        )
        .then((ret) => console.log(ret))
        .catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
        ))

/*
const editTask = (title, textfield, author) =>
client.query(
q.Update(
    q.Ref(q.Collection('tasks'), ref => {
        return q.Get(ref);
    }),
    {
        data: {
            title,
            textfield,
            author
        }
    },
)
)
.then((ret) => console.log(ret))
.catch(err => console.warn(err))

*/

export const deleteTask = taskId =>
    client
        .query(q.Delete(q.Ref(q.Collection('tasks'), taskId)))
        .then(ret => ret)
        .catch(error => console.error('Error: ', error.message));