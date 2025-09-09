// app/components/ProjectHeader.tsx
import { PhotoIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function ProjectHeader() {
    return (
        <div className="p-4 bg-white border-b z-10">
            <div className="flex flex-col">
                <div className='flex gap-3 mt-1 items-center'>
                    <h1 className="text-xl font-bold text-gray-800">Sport XI Project</h1>
                    <span className="ml-3 px-4 py-1 bg-yellow-500 text-yellow-800 rounded-md text-xs font-medium">In progress</span>
                </div>
                <span className='mt-2 text-gray-400 font-medium'>event production</span>
                <div className="flex items-center text-sm text-gray-400 mt-1">
                    <span className='mr-4'>assigned</span>
                    <div className="flex -space-x-1 ml-1">
                        {/* Placeholder for assigned avatars */}
                        <div className="h-7 w-7 rounded-full bg-blue-200 flex items-center justify-center text-xs font-medium text-blue-800 border-2 border-white"><PhotoIcon className="h-4 w-4" /></div>
                        <div className="h-7 w-7 rounded-full bg-green-200 flex items-center justify-center text-xs font-medium text-green-800 border-2 border-white"><PhotoIcon className="h-4 w-4" /></div>
                        <div className="h-7 w-7 rounded-full bg-purple-200 flex items-center justify-center text-xs font-medium text-purple-800 border-2 border-white"><PhotoIcon className="h-4 w-4" /></div>
                        <div className="h-7 w-7 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-700 border-2 border-white">
                            <PlusIcon className="h-4 w-4" />
                        </div>
                    </div>
                    <button className="ml-3 text-sm text-blue-700 hover:underline">Manage</button>
                </div>
                <p className="text-xs text-gray-400 mt-3">Last updated on: 04 April, 2022</p>
            </div>
        </div>
    );
}