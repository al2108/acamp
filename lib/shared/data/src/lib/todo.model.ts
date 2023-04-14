import {z} from 'zod';

export const todoSchema = z
  .object({
    userId: z.number().min(1).max(10),
    id: z.number().min(1).max(200),
    title: z.string(),
    completed: z.boolean(),
    readTimestamp: z.date().default(new Date('1900-01-01')),
    userName: z.string().default('')
  })
  .transform(todo => {
    const transfomedTodo = {...todo};
    transfomedTodo.readTimestamp = new Date();
    transfomedTodo.userName = 'User ' + todo.userId;
    return transfomedTodo;
  });

export const todoListSchema = z.array(todoSchema);

export type Todo = z.infer<typeof todoSchema>;
export type TodoList = z.infer<typeof todoListSchema>;
