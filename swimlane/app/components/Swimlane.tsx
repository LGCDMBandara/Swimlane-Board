// app/components/Swimlane.tsx
import { Droppable } from '@hello-pangea/dnd';
import { Task, useBoardStore } from '../store/boardStore';
import TaskCard from './TaskCard';
import { PlusIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface SwimlaneProps {
    status: Task['status'];
}

const statusColors = {
    "To Do": 'border-t-gray-400',
    "In Progress": 'border-t-orange-500',
    "Approved": 'border-t-green-500',
    "Reject": 'border-t-red-500',
}

export default function Swimlane({ status }: SwimlaneProps) {
    const tasks = useBoardStore((state) => state.tasks);
    const searchQuery = useBoardStore((state) => state.searchQuery);

    const filteredTasks = tasks.filter(
        (task) =>
            task.status === status &&
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`flex-shrink-0 w-72 bg-gray-50 p-3 rounded-lg border-t-4 ${statusColors[status]} shadow-sm`}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <h2
                        className={`
    font-semibold text-sm px-4 py-1 rounded-full 
    ${status === "To Do"
                                ? "bg-gray-200 text-gray-800"
                                : status === "In Progress"
                                    ? "bg-yellow-500 text-white"
                                    : status === "Approved"
                                        ? "bg-green-500 text-white"
                                        : status === "Reject"
                                            ? "bg-red-500 text-white"
                                            : "bg-gray-200 text-gray-800"
                            }
  `}
                    >
                        {status}
                    </h2>

                    <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full">
                        {filteredTasks.length}
                    </span>
                </div>
                <div className="flex items-center space-x-1">
                    <button className="p-1 rounded-md hover:bg-gray-100">
                        <PlusIcon className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="p-1 rounded-md hover:bg-gray-100">
                        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
                    </button>
                </div>
            </div>

            <Droppable droppableId={status}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`min-h-[500px] transition-colors duration-200 rounded-md ${snapshot.isDraggingOver ? 'bg-blue-50' : 'bg-gray-50'
                            }`}
                    >
                        {filteredTasks.map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}