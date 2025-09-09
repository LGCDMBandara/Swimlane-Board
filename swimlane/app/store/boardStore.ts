import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Task {
    id: number;
    title: string;
    status: 'To Do' | 'In Progress' | 'Approved' | 'Reject';
    tag: string;
    priority: 'Low' | 'Medium' | 'High';
    assignedTo?: string[];
    dueDate?: string;  
    comments?: number; 
    reports?: number; 
    attachments?: number;
    hasImage?: boolean;
}

interface BoardState {
    tasks: Task[];
    draggedTask: number | null;
    searchQuery: string;
    fetchTasks: () => Promise<void>;
    setDraggedTask: (taskId: number | null) => void;
    moveTask: (id: number, newStatus: Task['status']) => void;
    setSearchQuery: (query: string) => void;
}

export const useBoardStore = create<BoardState>()(
    persist(
        (set) => ({
            tasks: [],
            draggedTask: null,
            searchQuery: '',

            fetchTasks: async () => {
                const response = await fetch('/api/tasks');
                const tasks = await response.json();
                set({ tasks });
            },

            setDraggedTask: (taskId) => set({ draggedTask: taskId }),

            moveTask: (id, newStatus) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, status: newStatus } : task
                    ),
                })),

            setSearchQuery: (query) => set({ searchQuery: query }),
        }),
        {
            name: 'board-storage',
        }
    )
);