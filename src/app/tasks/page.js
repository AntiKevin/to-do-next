/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import TaskCreator from '@/components/TaskManager/TaskCreator';
import TaskList from '@/components/TaskManager/TaskList';
import { Box } from '@mui/material';


const page = () => {

  return (
    <main height="100%">
      <Box 
        display="flex"
        justifyContent="center"
      >
        <h1>To-do List</h1>
      </Box>
      <TaskCreator />
      <TaskList />
  </main>
  )
}

export default page