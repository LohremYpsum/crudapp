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

export const deleteTask = expenseId =>
    client
        .query(q.Delete(q.Ref(q.Collection('tasks'), expenseId)))
        .then(ret => ret)
        .catch(error => console.error('Error: ', error.message));