'use client';

import { useBoardStore } from '../store/boardStore';
import Image from 'next/image';
import {
    PlusIcon,
    BellIcon,
    MagnifyingGlassIcon,
    ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import Avatar from '../../public/Avatar.jpg'; 

export default function TopBar() {
    const searchQuery = useBoardStore((state) => state.searchQuery);
    const setSearchQuery = useBoardStore((state) => state.setSearchQuery);

    return (
        <header className="p-4 bg-white flex items-center justify-between border-b shadow-sm z-20 sticky top-0">
            <div className="flex items-center space-x-2 text-lg font-bold text-gray-800">
                <ClipboardDocumentListIcon className="h-6 w-6 text-blue-500" />
                <span>Boards <span className='text-blue-500'>App</span></span>
            </div>

            <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    <PlusIcon className="h-5 w-5" />
                    <span>Create new board</span>
                </button>

                <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 pl-10 pr-4 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>

                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <BellIcon className="h-6 w-6 text-gray-600" />
                </button>

                <div className="flex items-center space-x-2 cursor-pointer">
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700 overflow-hidden">
                        <Image src={Avatar} alt="User Avatar" />
                    </div>
                </div>
            </div>
        </header>
    );
}