// app/page.tsx
import Board from './components/Board';
import TopBar from './components/TopBar';
import ProjectHeader from './components/ProjectHeader';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  return (
    <aside className="w-[280px] bg-white p-4 border-r hidden md:flex flex-col">
      <div className="flex items-center justify-between p-2 mb-6 border rounded-md cursor-pointer hover:bg-gray-50">
        <div className="flex items-center space-x-2">
          <FolderIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Root folder</span>
        </div>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>
      <nav className="flex-grow">
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-blue-50">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center justify-between space-x-3 p-2 rounded-md bg-blue-100 text-blue-700 font-semibold">
              <div className="flex items-center space-x-3">
                <ClipboardDocumentListIcon className="h-5 w-5" />
                <span>Boards</span>
              </div>
              <ChevronUpIcon className="h-4 w-4" />
            </a>
            <ul className="ml-8 mt-1 text-sm space-y-1">
              <li><a href="#" className="block p-1 text-gray-600 hover:text-blue-600">Create routes</a></li>
              <li><a href="#" className="block p-1 text-gray-600 hover:text-blue-600">Delepmant React App</a></li>
              <li><a href="#" className="block p-1 font-semibold text-blue-700">Sport XI Project</a></li>
              <li><a href="#" className="block p-1 text-gray-600 hover:text-blue-600">Wordpress theme</a></li>
            </ul>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center justify-between space-x-3 p-2 rounded-md text-gray-700 hover:bg-blue-50">
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                <span>Messages</span>
              </div>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-blue-50">
              <CalendarDaysIcon className="h-5 w-5" />
              <span>Calendar</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-blue-50">
              <UsersIcon className="h-5 w-5" />
              <span>Team members</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <a href="#" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-blue-50 mb-4">
          <QuestionMarkCircleIcon className="h-5 w-5" />
          <span>Support</span>
        </a>
        <button className="flex items-center space-x-3 p-3 rounded-xl bg-gray-800 text-gray-200 font-medium w-full justify-center hover:bg-gray-900 cursor-pointer">
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="flex h-screen overflow-x-hidden overflow-y-auto">
      <div className="flex-1 flex flex-col bg-gray-50">
        <TopBar />
        <div className='flex'>
          <Sidebar />
          <div className="flex-1">
            <ProjectHeader />
            <Board />
          </div>
        </div>
      </div>
    </main>
  );
}