import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import SideBareItems from './sidebaritem'

const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon, count: '5', current: true },
    { name: 'Customers', href: '/customers', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]




export default function SideBare() {
    return (
        <div className="flex h-screen grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">

            <nav className="flex flex-1 mt-6 flex-col">
                <SideBareItems navigation={navigation} teams={teams} />
            </nav>
        </div>
    )
}
