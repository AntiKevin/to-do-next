'use client';
import { useState } from 'react';

import { useTaskStore } from '@/store/tasks/useTaskStore';
import { Button, Stack, TextField } from '@mui/material';


const TaskCreator = () => {

    const [newTask, setNewTask] = useState('')

    const addTaskStore = useTaskStore((state) => state.addTask)

    function addTask() {
        addTaskStore(newTask)
    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            spacing={4}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={0}
            >
                <TextField
                    onInput={(e) => { setNewTask(e.target.value) }}
                    id="outlined-basic"
                    label="Nova Tarefa"
                    variant="outlined"
                />

                <Button
                    style={{ marginLeft: 5 }}
                    variant="outlined"
                    onClick={addTask}
                >
                    Add
                </Button>

            </Stack>
        </Stack>
    )
}

export default TaskCreator