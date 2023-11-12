import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTaskStore = create(
  persist(
    (set, get) => ({
        tasks: [],
        addTask: (tituloTask) => {
            const currentTasks  = get().tasks
            set({ tasks: [...currentTasks, { titulo: tituloTask, status: 'pendente' }] })
        },
        removeTask: (index) => set({ tasks: get().tasks.filter((task, index_) => index_ !== index)})
    }),
    {
      name: 'tasks',
    }
  )
)
