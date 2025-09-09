// app/components/TaskCard.tsx
import { Draggable } from '@hello-pangea/dnd';
import { Task } from '../store/boardStore';
import { ChatBubbleLeftIcon, PaperClipIcon, DocumentTextIcon, UserCircleIcon, PhotoIcon, CalendarDateRangeIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

interface TaskCardProps {
    task: Task;
    index: number;
}

const priorityColors = {
    Low: 'bg-gray-100 text-gray-400',
    Medium: 'bg-gray-100 text-gray-400',
    High: 'bg-gray-100 text-gray-400',
};

const tagStyles: Record<string, { dot: string; label: string }> = {
    Research: { dot: 'bg-green-500', label: 'text-gray-400' },
    Design: { dot: 'bg-red-500', label: 'text-gray-400' },
    Feedback: { dot: 'bg-blue-500', label: 'text-gray-400' },
    Presentation: { dot: 'bg-orange-500', label: 'text-gray-400' },
    'UX Research': { dot: 'bg-yellow-500', label: 'text-gray-400' },
    Interface: { dot: 'bg-black', label: 'text-gray-400' },
    Other: { dot: 'bg-gray-500', label: 'text-gray-400' },
};


export default function TaskCard({ task, index }: TaskCardProps) {
    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-200 cursor-grab active:cursor-grabbing"
                >
                    {/* Tag */}
                    <div className="flex items-center text-xs font-medium mb-2">
                        <span className={`h-2 w-2 rounded-full mr-1 ${tagStyles[task.tag]?.dot || 'bg-gray-400'}`} />
                        <span className={`px-2 py-0.5 rounded-full ${tagStyles[task.tag]?.label || 'bg-gray-100 text-gray-700'}`}>
                            {task.tag}
                        </span>
                    </div>

                    {/* Title */}
                    <p className="text-sm font-semibold text-gray-800 mb-3">{task.title}</p>

                    {/* Assigned To & Priority */}
                    <div className="flex items-center gap-5 mb-3">
                        <div className="flex -space-x-2">
                            {task.assignedTo && task.assignedTo.length > 0 ? (
                                task.assignedTo.map((initial, i) => (
                                    <div
                                        key={i}
                                        className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 border-2 border-white"
                                    >
                                        {initial[0]}
                                    </div>
                                ))
                            ) : (
                                <UserCircleIcon className="h-7 w-7 text-gray-300" />
                            )}
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex gap-1 ${priorityColors[task.priority]}`}>
                            <PaintBrushIcon className="h-4 w-4" />
                            {task.priority}
                        </span>
                    </div>

                    {/* Image Placeholder */}
                    {task.hasImage === true && (
                        <div className="w-full h-24 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                            <PhotoIcon className="h-6 w-6 text-gray-400" />
                        </div>
                    )}



                    {/* Footer: Comments, Attachments, Reports, Due Date */}
                    <div className="flex items-center justify-between text-gray-500 text-xs pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                            {task.comments && (
                                <span className="flex items-center space-x-1">
                                    <ChatBubbleLeftIcon className="h-4 w-4" />
                                    <span>{task.comments}</span>
                                </span>
                            )}
                            {task.attachments && (
                                <span className="flex items-center space-x-1">
                                    <PaperClipIcon className="h-4 w-4" />
                                    <span>{task.attachments}</span>
                                </span>
                            )}
                            {task.reports && (
                                <span className="flex items-center space-x-1 text-red-500 font-medium">
                                    <DocumentTextIcon className="h-4 w-4" />
                                    <span>{task.reports} Reports</span>
                                </span>
                            )}
                            {task.dueDate && (
                                <span className="flex items-center space-x-1 text-red-500 font-medium">
                                    <CalendarDateRangeIcon className="h-4 w-4" />
                                    {task.dueDate}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
}
