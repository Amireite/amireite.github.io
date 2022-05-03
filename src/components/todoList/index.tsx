import React from 'react';
import Stack from '@mui/material/Stack';
import TodoItem from '../todoItem';

function TodoList(props:any) {
    const todoList = [
        {
          id: 1,
          content: 'Observer',
          isDone: false
        },
        {
          id: 2,
          content: 'Strategy',
          isDone: false
        },{
          id: 3,
          content: 'Factory Method',
          isDone: false
        },{
          id: 4,
          content: 'Abstract Factory',
          isDone: false
        },{
          id: 5,
          content: 'Facade',
          isDone: false
        },{
          id: 6,
          content: 'Iterator',
          isDone: false
        },{
          id: 7,
          content: 'Singleton',
          isDone: false
        },{
          id: 8,
          content: 'Adapter',
          isDone: false
        },{
          id: 9,
          content: 'Composite',
          isDone: false
        },{
          id: 10,
          content: 'Proxy',
          isDone: false
        },{
          id: 11,
          content: 'Command',
          isDone: false
        },
      ]
    return (
        <Stack sx={{
            m: '1em'
        }}>
            {todoList.map(todoItem => (
                <TodoItem key={todoItem.id} text={todoItem.content} checked={todoItem.isDone} />
            ))}
        </Stack>
    )
}

export default TodoList;