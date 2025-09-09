'use client';

import { useEffect } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useBoardStore, Task } from '../store/boardStore';
import Swimlane from './Swimlane';

const statuses: Task['status'][] = ['To Do', 'In Progress', 'Approved', 'Reject'];

export default function Board() {
    const tasks = useBoardStore((state) => state.tasks);
    const fetchTasks = useBoardStore((state) => state.fetchTasks);
    const moveTask = useBoardStore((state) => state.moveTask);

    useEffect(() => {
        if (tasks.length === 0) {
            fetchTasks();
        }
    }, [fetchTasks, tasks.length]);


    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const taskId = parseInt(draggableId, 10);
        const newStatus = destination.droppableId as Task['status'];

        moveTask(taskId, newStatus);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="flex gap-4 p-6 min-h-full">
                {statuses.map((status) => (
                    <Swimlane key={status} status={status} />
                ))}
            </div>
        </DragDropContext>
    );
}