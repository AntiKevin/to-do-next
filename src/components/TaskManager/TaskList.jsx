import { useTaskStore } from "@/store/tasks/useTaskStore";
import ClearIcon from '@mui/icons-material/Clear';
import { Checkbox, FormControlLabel, IconButton, Stack } from '@mui/material';
import { useEffect, useState } from "react";

const TaskList = () => {

    const tasksStored = useTaskStore((state) => state.tasks)
    const removeTask = useTaskStore((state) => state.removeTask)

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(tasksStored)
    }, [tasksStored])


    return (
        <Stack
            alignItems="center"
            spacing={0}
        >
            {tasks.map((task, index) => (
                <Stack key={index} direction="row">
                    <FormControlLabel control={<Checkbox />} label={task.titulo} />
                    <IconButton onClick={() => { removeTask(index) }} aria-label="delete">
                        <ClearIcon />
                    </IconButton>
                </Stack>

            ))}
        </Stack >
    )
}

export default TaskList