import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/navBar';
import TodoList from './components/todoList';

function App() {
  return (
      <Box>
        <NavBar />
        <Container>
          <TodoList />
        </Container>
      </Box>
  );
}

export default App;
